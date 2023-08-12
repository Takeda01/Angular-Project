import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { Subject } from '../../types/subject';
import { BehaviorSubject } from 'rxjs';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let userServiceStub: Partial<UserService>;

  const mockUser: User = {
    
    Name: 'testuser',
    email: 'test@example.com',
    password: '123456'
  };

  const mockSubjects: Subject[] = [
    { Price: 1, Name: 'Subject 1' },
    { Price: 2, Name: 'Subject 2' },
  ];

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['LogOut']);
    userServiceStub = {
      history: mockSubjects,
    };

    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: UserService, useValue: userServiceStub },
      ],
    });

    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize CurrentPatient and list on ngOnInit', () => {
    const authService = TestBed.inject(AuthService);
    authService.currentUser$ = new BehaviorSubject<User | null>(mockUser);

    fixture.detectChanges();

    expect(component.CurrentPatient).toEqual(mockUser);
    expect(component.list).toEqual(mockSubjects);
  });

  it('should call AuthService.LogOut when OnLogOut is called', () => {
    component.OnLogOut();
    expect(authServiceSpy.LogOut).toHaveBeenCalled();
  });
});
