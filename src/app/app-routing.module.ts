import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DBUpageComponent } from './UserManagement/dbupage/dbupage.component';
import { PFUpageComponent } from './UserManagement/pfupage/pfupage.component';
import { UserinfomodalComponent } from './Model/userinfomodal/userinfomodal.component';

const routes: Routes = [
  {
  path:'',
  component:HomepageComponent,
  pathMatch:'full'
},{
  path:'login',
  component:LoginComponent
},{
  path:'dbupage',
  component:DBUpageComponent
},{
  path:'pfupage',
  component:PFUpageComponent
},{
  path:'mdpage',
  component:UserinfomodalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
