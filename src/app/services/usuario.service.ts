import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { RegisterForm } from '../auth/interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../auth/interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
const urlBase = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {

  }



  logout() {
    localStorage.removeItem('token');

    this.auth2.signOut().then( () => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }



  crearUsuario(formData: RegisterForm): any {

    return this.http.post(`${urlBase}/usuarios`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token);
        }),
      );
  }

  login(formData: LoginForm): any {
    return console.log('login');
    // return this.http.post(`${urlBase}/login`, formData)
    //   .pipe(
    //     tap(
    //       (res: any) => {
    //         console.log(res);
    //         localStorage.setItem('token', res.token);
    //       })
    //   );
  }

}
