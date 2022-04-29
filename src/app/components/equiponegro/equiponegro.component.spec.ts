import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiponegroComponent } from './equiponegro.component';

describe('EquiponegroComponent', () => {
  let component: EquiponegroComponent;
  let fixture: ComponentFixture<EquiponegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiponegroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiponegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
