import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DBUpageComponent } from './UserManagement/dbupage/dbupage.component';
import { LayoutComponent } from './layout/layout.component';

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
  component:DBUpageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
