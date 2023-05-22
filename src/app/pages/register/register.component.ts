import { Component, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = ''
  password = ''
  email = ''
  risultato = ''
  error = ''
  success = false

  private data:any = []
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {

  }



  //DA PROVARE
  registerData() {
    const body = {
      user: this.username,
      email: this.email,
      password: this.password

    }
    this.auth.register(body).subscribe(
      () => {
        this.success = true;
        this.risultato = 'Registrazione avvenuta!!'

      },
      error => {
        this.success = false;
        this.risultato = error;

      }
    );
  }
}











