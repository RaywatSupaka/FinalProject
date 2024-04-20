import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsRoutes, UiComponentsRoutingModule } from './ui-components-routing.module';
import { EComComponent } from './e-com/e-com.component';
import { SocialComponent } from './social/social.component';
import { NewsComponent } from './news/news.component';
import { EducationComponent } from './education/education.component';
import { BlogsComponent } from './blogs/blogs.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    EComComponent,
    SocialComponent,
    NewsComponent,
    EducationComponent,
    BlogsComponent,
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    UiComponentsRoutingModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule
  ]
})
export class UiComponentsModule { }
