import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappointmentComponent } from './newappointment.component';

describe('NewappointmentComponent', () => {
  let component: NewappointmentComponent;
  let fixture: ComponentFixture<NewappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
