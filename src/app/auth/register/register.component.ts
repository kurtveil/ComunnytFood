import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['Kurt', Validators.required],
    email: ['kurt@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['1234567', Validators.required],
    terms: [false, Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      console.log('posteando formulario');
    } else {
      console.log('Formulario no es correcto...');

    }
  }

  camposInvalido(campo: string): boolean{
    if (this.registerForm.get(campo).invalid && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }
  contrasenasNoValidas(): boolean{
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    if ((pass1 !== pass2) && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(): any{
    return !this.registerForm.get('terms').value && this.formSubmitted;
  }
}
