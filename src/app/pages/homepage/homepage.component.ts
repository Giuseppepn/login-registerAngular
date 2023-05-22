import { Component, Inject, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  constructor(private http: HttpClient, private auth:AuthService, private router:Router) {
   }

   user = this.auth.utente.user
   email = this.auth.utente.email



   logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
   }











}
