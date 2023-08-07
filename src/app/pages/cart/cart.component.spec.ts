import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../cart.service';
import { UserService } from 'src/app/user/user.service';
import { Subject } from '../../types/subject';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [CartService, UserService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    userService = TestBed.inject(UserService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize list and total correctly', () => {
    const mockSubjects: Subject[] = [
      { Name: 'Subject1', Price: 10 },
      { Name: 'Subject2', Price: 20 },
      { Name: 'Subject3', Price: 30 }
    ];

    spyOnProperty(cartService, 'list', 'get').and.returnValue(mockSubjects);

    fixture.detectChanges();

    expect(component.list).toEqual(mockSubjects);
    expect(component.total).toEqual(60);
  });

  it('should calculate total correctly', () => {
    component.list = [
      { Name: 'Subject1', Price: 10 },
      { Name: 'Subject2', Price: 20 },
      { Name: 'Subject3', Price: 30 }
    ];

    component.calculateTotal();

    expect(component.total).toEqual(60);
  });

  it('should update user history on CheckOutDetails', () => {
    const mockSubjects: Subject[] = [
      { Name: 'Subject1', Price: 10 },
      { Name: 'Subject2', Price: 20 },
      { Name: 'Subject3', Price: 30 }
    ];

    component.list = mockSubjects;
    component.CheckOutDetails();

    expect(userService.history).toEqual(mockSubjects);
  });
});
