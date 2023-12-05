import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgistComponent } from './resgist/resgist.component';
import { InformationComponent } from './information/information.component';
import { NewspageComponent } from './newspage/newspage.component';

const routes: Routes = [
  {
  path:'',
  component:NewspageComponent,
},{
  path:'A',
  component:LoginComponent
},{
  path:'D',
  component:InformationComponent
},
{
  path:'B',
  component:ResgistComponent,
  children:[
    {
      path:'A',
      component:LoginComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
