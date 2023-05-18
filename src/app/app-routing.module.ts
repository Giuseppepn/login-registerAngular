import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},
{
  path:'',
  outlet: "modal",
  redirectTo: "/login",
  pathMatch: 'full'

},
{
  path:'homepage',
  component: HomepageComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
