import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { FullpageAdminComponent } from './layout/fullpage-admin/fullpage-admin.component';
import { AuthGuard } from './service/authGuard';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageAdminComponent } from './pages/homepage-admin/homepage-admin.component';


const routes: Routes = [
  {
    path: 'user',
    component: FullpageComponent,
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'homepageAdmin',
        pathMatch: 'full',
      },
      {
        path: 'homepageAdmin',
        component: HomepageAdminComponent,
      },
      {
        path: 'ui-dashboard',
        loadChildren: () =>
          import('./pages/ui-dashboard-admin/ui-dashboard-admin.module').then(
            (m) => m.UiDashboardAdminModule)
      },
    ],
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomepageComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
