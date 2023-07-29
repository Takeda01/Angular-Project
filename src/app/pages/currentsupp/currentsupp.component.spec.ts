import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentsuppComponent } from './currentsupp.component';

describe('CurrentsuppComponent', () => {
  let component: CurrentsuppComponent;
  let fixture: ComponentFixture<CurrentsuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentsuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentsuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
