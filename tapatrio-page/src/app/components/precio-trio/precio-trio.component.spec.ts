import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioTrioComponent } from './precio-trio.component';

describe('PrecioTrioComponent', () => {
  let component: PrecioTrioComponent;
  let fixture: ComponentFixture<PrecioTrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecioTrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioTrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
