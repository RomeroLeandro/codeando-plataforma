import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})


export class FormularioAlumnosComponent {
  formularioAlumno: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    function edadMinima(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value !== null && control.value < 18) {
        return { 'edadMinima': true }; 
      }
      return null;
    }

    this.formularioAlumno = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      edad: ['', [Validators.required, edadMinima]],
      fechaNacimiento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    
  }
  
  onSubmit() {
    console.log(this.formularioAlumno.value);
  }

}
