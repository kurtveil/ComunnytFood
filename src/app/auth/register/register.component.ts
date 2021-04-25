import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Option } from '../interfaces/option.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formSubmitted = false;
  public esFormulario: boolean;
  public esVender = false;
  public esComprar = false;

  public optionList: Option[] = [
    {value: 'comprar', viewValue: 'Comprar'},
    {value: 'vender', viewValue: 'Vender'},
  ];
  public optionsControl = new FormControl(this.optionList[1].value);
  public comprarForm = this.fb.group({
    name: ['Kurt', Validators.required],
    email: ['kurt@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['1234567', Validators.required],
    terms: [false, Validators.required],
    option: this.optionsControl
  });
  public venderForm = this.fb.group({
    direccion: ['Dg 132 # 123 - 12', Validators.required],
    barrio: ['suba', [Validators.required, Validators.email]],
    email: ['pepe@gmail.com', [Validators.required, Validators.email]],
    contrasena: ['123456', Validators.required],
    telefono: ['3058891028', Validators.required],
    telefono2: ['1234567', Validators.required],
    numeroCertificado: ['', Validators.required],
    numeroDocumento: ['1232323', Validators.required],
    terminos: [false, Validators.required],
  });
  constructor(private fb: FormBuilder,
              private router: Router) {
    const optionSelected = this.optionsControl.value;
    console.log(this.optionsControl.value);
    if (optionSelected === 'vender'){
      this.esVender = true;
      this.esComprar = false;
    } else if (optionSelected === 'comprar') {
      this.esComprar = true;
      this.esVender = false;
    }
  }

  ngOnInit(): void {
  }


  crearUsuario(){
    this.router.navigateByUrl('dashboard');
    // this.formSubmitted = true;
    // console.log(this.registerForm.value);
    // if(this.registerForm.valid){
    //   console.log('posteando formulario');
    // } else {
    //   console.log('Formulario no es correcto...');

    // }
  }

  registerOption(event){
    console.log(event);
  }

  camposInvalido(campo: string): boolean{
    if (this.venderForm.get(campo).invalid && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }
  // contrasenasNoValidas(): boolean{
  //   const pass1 = this.registerForm.get('password').value;
  //   const pass2 = this.registerForm.get('password2').value;
  //   if ((pass1 !== pass2) && this.formSubmitted){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  aceptaTerminos(): any{
    return !this.venderForm.get('terms').value && this.formSubmitted;
  }
}
