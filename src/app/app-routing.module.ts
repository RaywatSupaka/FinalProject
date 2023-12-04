import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//   path:'',
//   component:LoginComponent,
// },{
//   path:'A',
//   component:ResgistComponent
// },
// {
//   path:'C',
//   component:ResgistComponent,
//   children:[
//     {
//       path:'A',
//       component:LoginComponent
//     }
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
