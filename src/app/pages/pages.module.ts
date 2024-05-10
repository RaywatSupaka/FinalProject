import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { PagesRoutes, PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [HomepageComponent, HomepageAdminComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
