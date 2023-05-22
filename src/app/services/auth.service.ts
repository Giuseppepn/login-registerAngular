import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errore = ''
  utente : Account = {
    user : '',
    email : '',
  }

  private data:any = []
  constructor(private http: HttpClient, private router: Router,) {

   }

  verifyToken(token : any){

    if (!token) {
      this.router.navigateByUrl('/login');
      return of(false);
    }

    const body = { token: token };
  return this.http.post<string>('http://127.0.0.1:8000/api/v1/verifica', body, { observe: 'response' }).pipe(
    map((response: any) => {
      const check = response.status;
      if (check == 212) {
        this.router.navigateByUrl('/homepage')
        return true;
      } else {
        this.router.navigateByUrl('/login')
        return false
      }
    }),
    catchError((error: any) => {
      this.router.navigateByUrl('/login')
      return of(false)
    })
  );

  }




  login(body1: any): Observable<boolean> {
    const body = {
      user: body1.user,
      password: body1.password,
      email: body1.email,
    };

    return this.http.post<string>('http://127.0.0.1:8000/api/v1/login', body, { observe: 'response' }).pipe(
      map((data: any) => {
        const check = data.status;
        if (check === 212) {
          this.router.navigateByUrl('/homepage');
          this.utente = {
            user: data.body.user.username,
            email: data.body.user.email,
          };
          const token = data.body.token;
          localStorage.setItem('token', token);
          return true;
        } else {
          this.errore = "Credenziali sbagliate!";
          return false;
        }
      }),
      catchError((error: any) => {
        this.errore = "Errore nella richiesta";
        return of(false); // Return false as an Observable
      })
    );
  }




 register(body1: any): Observable<any> {
  const body = {
    user: body1.user,
    password: body1.password,
    email: body1.email,
  };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  const option = {headers: headers};

  return this.http.post('http://127.0.0.1:8000/api/v1/utentes', body, option).pipe(
    catchError(error => {
      return throwError('Username o Email già in uso!');
    })
  );
}



}







