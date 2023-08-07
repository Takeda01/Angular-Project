import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckOutComponent } from './check-out.component';
import { CartService } from '../cart.service';
import { Subject } from 'src/app/types/subject';

describe('CheckOutComponent', () => {
  let component: CheckOutComponent;
  let fixture: ComponentFixture<CheckOutComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckOutComponent],
      providers: [CartService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize list from CartService', () => {
    const mockSubjects: Subject[] = [
      { Name: 'Subject1', Price: 10 },
      { Name: 'Subject2', Price: 20 },
    ];

    spyOnProperty(cartService, 'list', 'get').and.returnValue(mockSubjects);

    fixture.detectChanges();

    expect(component.list).toEqual(mockSubjects);
  });

  it('should check if input fields are valid', () => {
    const validInputValue = 'Valid Input';
    const invalidInputValue = '!@#$Invalid!@#$';

    const validInputField = { value: validInputValue } as HTMLInputElement;
    const invalidInputField = { value: invalidInputValue } as HTMLInputElement;

    expect(component.checkInputField(validInputField)).toBeTrue();
    expect(component.checkInputField(invalidInputField)).toBeFalse();
  });

  it('should submit the form when all fields are filled', () => {
    spyOn(window, 'alert');
    spyOnProperty(cartService, 'list', 'get').and.returnValue([]);

    const nameInput = { value: 'John Doe' } as HTMLInputElement;
    const cityInput = { value: 'New York' } as HTMLInputElement;
    const postcodeInput = { value: '12345' } as HTMLInputElement;
    const streetInput = { value: 'Some Street 123' } as HTMLInputElement;
    const phoneInput = { value: '9876543210' } as HTMLInputElement;

    component.Submit(nameInput, cityInput, postcodeInput, streetInput, phoneInput);

    expect(window.alert).toHaveBeenCalledWith('Thanks for your purchase!');
    expect(cartService.list).toEqual([]);
  });

  it('should show an alert if any of the fields are empty', () => {
    spyOn(window, 'alert');
    spyOnProperty(cartService, 'list', 'get').and.returnValue([]);

    const nameInput = { value: '' } as HTMLInputElement;
    const cityInput = { value: 'New York' } as HTMLInputElement;
    const postcodeInput = { value: '12345' } as HTMLInputElement;
    const streetInput = { value: 'Some Street 123' } as HTMLInputElement;
    const phoneInput = { value: '9876543210' } as HTMLInputElement;

    component.Submit(nameInput, cityInput, postcodeInput, streetInput, phoneInput);

    expect(window.alert).toHaveBeenCalledWith('All the fields are necessary!');
  });
});
