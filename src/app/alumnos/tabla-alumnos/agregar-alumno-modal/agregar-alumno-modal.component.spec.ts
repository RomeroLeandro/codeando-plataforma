import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoModalComponent } from './agregar-alumno-modal.component';

describe('AgregarAlumnoModalComponent', () => {
  let component: AgregarAlumnoModalComponent;
  let fixture: ComponentFixture<AgregarAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
