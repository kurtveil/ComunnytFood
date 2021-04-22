import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['1234567', Validators.required],
    remember: false
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }



  login() {
    console.log(this.loginForm.value);
    this.usuarioService.login(this.loginForm.value).subscribe((res) => {
      if (this.loginForm.get('remember').value) {
        localStorage.setItem('email', this.loginForm.get('email').value);
      } else {
        localStorage.removeItem('email');
      }
      // Navegar al dashboard
      this.router.navigateByUrl(`/`);
    }, (err) => {
      // Si sucede un error
      // swal.fire('Error', err.error.msg, 'error');
    });

  }





}
