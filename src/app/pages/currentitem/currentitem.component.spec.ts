import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentitemComponent } from './currentitem.component';

describe('CurrentitemComponent', () => {
  let component: CurrentitemComponent;
  let fixture: ComponentFixture<CurrentitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
