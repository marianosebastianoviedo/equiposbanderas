import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EquiposComponent } from './equipos.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

describe('EquiposComponent', () => {
  let component: EquiposComponent;
  let fixture: ComponentFixture<EquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,OverlayModule,MatDialogModule],
      providers:[MatDialog],
      declarations: [ EquiposComponent ]
    })
    .compileComponents();
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create / deberia crear', () => {
    expect(component).toBeTruthy();
  });
});
