import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodpaymentComponent } from './methodpayment.component';

describe('MethodpaymentComponent', () => {
  let component: MethodpaymentComponent;
  let fixture: ComponentFixture<MethodpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
