import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/Auth.guard';


const routes: Routes = [{
  path:'login',
  component: LoginComponent
},
{
  path:'',
  redirectTo: "/login",
  pathMatch: 'full'

},
{
  path:'homepage',
  component: HomepageComponent, canActivate: [authGuard]

},
{
  path:'register',
  component: RegisterComponent,
},
{
  path: '**',
  redirectTo: '/login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
