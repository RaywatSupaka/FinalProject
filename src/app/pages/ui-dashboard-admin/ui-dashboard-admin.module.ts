import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDashboardAdminRoutingModule , routes } from './ui-dashboard-admin-routing.module';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { WebsitemanagementComponent } from './websitemanagement/websitemanagement.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { TablerIconsModule } from 'angular-tabler-icons';
import { WebsitecreateComponent } from './websitecreate/websitecreate.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    UsermanagementComponent,
    WebsitemanagementComponent,
    WebsitecreateComponent
  ],
  imports: [
    CommonModule,
    UiDashboardAdminRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    TablerIconsModule.pick(TablerIcons),
  ]
})
export class UiDashboardAdminModule { }
