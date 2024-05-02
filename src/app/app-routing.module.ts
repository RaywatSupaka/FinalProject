import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DBUpageComponent } from './UserManagement/dbupage/dbupage.component';
import { PFUpageComponent } from './UserManagement/pfupage/pfupage.component';
import { UserinfomodalComponent } from './Model/userinfomodal/userinfomodal.component';
import { AuthGuard } from './service/authGuard';
import { BlankComponent } from './layout/blank/blank.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { FullpageAdminComponent } from './layout/fullpage-admin/fullpage-admin.component';
import { HomepageAdminComponent } from './pages/homepage-admin/homepage-admin.component';

const routes: Routes = [
  {
    path: '',
    component: FullpageComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full',
      },
      {
        path: 'homepage',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UiComponentsModule),
      },
    ],
  },
  {
    path:'admin',
    component: FullpageAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepageAdmin',
        pathMatch: 'full',
      },
      {
        path: 'homepageAdmin',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-dashboard',
        loadChildren: () =>
          import('./pages/ui-dashboard-admin/ui-dashboard-admin.module').then(
            (m) => m.UiDashboardAdminModule)
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
