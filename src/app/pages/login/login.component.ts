import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'image-gallery';
  username = ''
  password = ''
  email = ''
  avvisoHtml = ''
  error = ''

  outlet =  new RouterOutlet


  private data:any = []
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {

  }

  async formRegister()
  {
    this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "register")
              this.outlet.deactivate();
          })
          console.log("cambio pag")
          this.router.navigateByUrl('/register')
  }



  //////////////////////////////////////////////////////////////////////////////////////////

  async tryLogin(){

    const body = {
      user: this.username,
      email: this.email,
      password: this.password

    }
    this.auth.login(body).subscribe(success => {
      if (!success) {
        this.error = this.auth.errore
      }
    });

  }


}

