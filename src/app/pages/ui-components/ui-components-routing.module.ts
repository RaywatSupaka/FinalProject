import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { EComComponent } from './e-com/e-com.component';
import { EducationComponent } from './education/education.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewsComponent } from './news/news.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = []

export const UiComponentsRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'ecom',
        component: EComComponent
      },
      {
        path:'education',
        component:EducationComponent
      },
      {
        path:'insurance',
        component:InsuranceComponent
      },
      {
        path:'news',
        component:NewsComponent
      },
      {
        path:'social',
        component:SocialComponent
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentsRoutingModule { }
