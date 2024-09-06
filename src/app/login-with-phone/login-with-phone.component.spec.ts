import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithPhoneComponent } from './login-with-phone.component';

describe('LoginWithPhoneComponent', () => {
  let component: LoginWithPhoneComponent;
  let fixture: ComponentFixture<LoginWithPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
