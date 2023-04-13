import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnoModalComponent } from './editar-alumno-modal.component';

describe('EditarAlumnoModalComponent', () => {
  let component: EditarAlumnoModalComponent;
  let fixture: ComponentFixture<EditarAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
