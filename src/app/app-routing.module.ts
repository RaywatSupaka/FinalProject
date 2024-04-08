import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DBUpageComponent } from './UserManagement/dbupage/dbupage.component';
import { PFUpageComponent } from './UserManagement/pfupage/pfupage.component';
import { UserinfomodalComponent } from './Model/userinfomodal/userinfomodal.component';
import { AuthGuard } from './service/authGuard';
import { DbapageComponent } from './AdminManagement/dbapage/dbapage.component';

const routes: Routes = [
  
{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'

},{
  path:'home',
  component:HomepageComponent,
  pathMatch:'full'
},{
  path:'login',
  component:LoginComponent
},{
  path:'dbupage',
  component:DBUpageComponent,
  canActivate: [AuthGuard]
},{
  path:'pfupage',
  component:PFUpageComponent,
  canActivate: [AuthGuard]
},{
  path:'mdpage',
  component:UserinfomodalComponent,
  canActivate: [AuthGuard]
},{
  path:'dbapage',
  component:DbapageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
