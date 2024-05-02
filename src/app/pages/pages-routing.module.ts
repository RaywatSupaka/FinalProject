import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

export const PagesRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'admin',
    component: HomepageAdminComponent,
    data: {
      title: 'Admin Page',
    },
  },
];