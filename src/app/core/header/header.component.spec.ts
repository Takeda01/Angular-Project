import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/user/auth.service';
import { BehaviorSubject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let authServiceMock: Partial<AuthService>;

  beforeEach(() => {
    authServiceMock = {
      bool$: new BehaviorSubject<boolean>(false),
    };

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize authenticated as false', () => {
    expect(component.authenticated).toBeFalse();
  });

  it('should update authenticated when AuthService emits', () => {
    const newAuthValue = true;
    (authServiceMock.bool$ as BehaviorSubject<boolean>).next(newAuthValue);
    fixture.detectChanges();

    expect(component.authenticated).toBe(newAuthValue);
  });

  it('should render different content based on authentication status', () => {
    const compiled = fixture.nativeElement;
    const authenticatedContent = 'Authenticated Content';
    const unauthenticatedContent = 'Unauthenticated Content';

    component.authenticated = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.authenticated-content')).toBeTruthy();
    expect(compiled.querySelector('.unauthenticated-content')).toBeFalsy();

    component.authenticated = false;
    fixture.detectChanges();
    expect(compiled.querySelector('.unauthenticated-content')).toBeTruthy();
    expect(compiled.querySelector('.authenticated-content')).toBeFalsy();
  });
});
