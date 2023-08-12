import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['LogIn']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.LogIn when OnLogIn is called', fakeAsync(() => {
    const email: HTMLInputElement = new HTMLInputElement;
    email.value = 'test@example.com'
    const password: HTMLInputElement = new HTMLInputElement;
    password.value = 'password123'

    fixture.detectChanges();

    const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
    const passwordInput = fixture.nativeElement.querySelector('input[type="password"]');
    const button = fixture.nativeElement.querySelector('button');

    emailInput.value = email;
    passwordInput.value = password;

    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    tick(); // Simulate passage of time

    button.click();

    expect(authServiceSpy.LogIn).toHaveBeenCalledWith(email, password);
  }));
});
