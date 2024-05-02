import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { WebsitemanagementComponent } from './websitemanagement/websitemanagement.component';

export const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'userManagement',
        component:UsermanagementComponent
      },
      {
        path:'websiteManagement',
        component:WebsitemanagementComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiDashboardAdminRoutingModule { }
