import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlackComponent } from './section-black.component';

describe('SectionBlackComponent', () => {
  let component: SectionBlackComponent;
  let fixture: ComponentFixture<SectionBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
