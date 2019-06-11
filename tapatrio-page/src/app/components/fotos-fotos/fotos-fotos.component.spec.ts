import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosFotosComponent } from './fotos-fotos.component';

describe('FotosFotosComponent', () => {
  let component: FotosFotosComponent;
  let fixture: ComponentFixture<FotosFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
