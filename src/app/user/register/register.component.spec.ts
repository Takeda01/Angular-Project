import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['SignUp']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RegisterComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.SignUp when OnSignUp is called', () => {
    const nameValue = 'John';
    const emailValue = 'test@example.com';
    const passwordValue = 'testpassword';

    fixture.detectChanges();

    const nameInput = fixture.nativeElement.querySelector('input[name="name"]');
    const emailInput = fixture.nativeElement.querySelector('input[name="email"]');
    const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
    const rePasswordInput = fixture.nativeElement.querySelector('input[name="repassword"]');
    const button = fixture.nativeElement.querySelector('button');

    nameInput.value = nameValue;
    emailInput.value = emailValue;
    passwordInput.value = passwordValue;
    rePasswordInput.value = passwordValue;

    fixture.detectChanges();

    button.click();

    expect(authServiceSpy.SignUp).toHaveBeenCalledWith(nameInput, emailInput, passwordInput,rePasswordInput);
  });
});
