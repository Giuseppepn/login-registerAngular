import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';


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
  outlet =  new RouterOutlet


  private data:any = []
  constructor(private http: HttpClient, private router: Router) {

  }

  getData(){
    const url ='http://localhost:8000/api/v1/utentes#top'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)

      console.log(this.data[2])
      console.log(this.data[1].username)
    })
  }

  //DA PROVARE
  async registerData(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
      //optional url query params for request
      const option = {headers: headers};

      const body = {
        user: this.username,
        email: this.email,
        password: this.password
      }
      console.log('ok')
      return this.http.post('http://127.0.0.1:8000/api/v1/utentes', body, option ).subscribe(data => {console.log(data)})
  }
  //////////////////////////////////////////////////////////////////////////////////////////

  async loginData(){

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    //optional url query params for request
    const option = {headers: headers};
    const body = {
      user: this.username,
      email: this.email,
      password: this.password

    }

      return this.http.post<string>('http://127.0.0.1:8000/api/v1/login', body, {observe: 'response'}).subscribe(data =>
      {
        var check = data.status
        if(check != 212)
        {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        }
        else
        {

          this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "homepage")
              this.outlet.deactivate();
          })
          console.log("LOGGATO")
          this.router.navigateByUrl('/homepage')



        }


      })




  }











  }

