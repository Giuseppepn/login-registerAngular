import { Injector, NgModule, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/Auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //LoginComponent,
    FormsModule,
    RouterModule,
  ],
  providers: [
    { provide: 'authGuard', useValue: authGuard }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
