import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiporojoComponent } from './equiporojo.component';

describe('EquiporojoComponent', () => {
  let component: EquiporojoComponent;
  let fixture: ComponentFixture<EquiporojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiporojoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiporojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
