import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DBUpageComponent } from './UserManagement/dbupage/dbupage.component';
import { PFUpageComponent } from './UserManagement/pfupage/pfupage.component';
import { CustomeInterceptor } from './service/custome.interceptor';
import { UserinfomodalComponent } from './Model/userinfomodal/userinfomodal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BlankComponent } from './layout/blank/blank.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { HeaderComponent } from './layout/fullpage/header/header.component';
import { SidebarComponent } from './layout/fullpage/sidebar/sidebar.component';
import { MaterialModule } from './material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { BrandingComponent } from './layout/fullpage/sidebar/branding.component';
import { AppNavItemComponent } from './layout/fullpage/sidebar/nav-item/nav-item.component';
import { FullpageAdminComponent } from './layout/fullpage-admin/fullpage-admin.component';
import { HeaderAdminComponent } from './layout/fullpage-admin/header-admin/header-admin.component';
import { SidebarAdminComponent } from './layout/fullpage-admin/sidebar-admin/sidebar-admin.component';
import { NavItemAdminComponent } from './layout/fullpage-admin/sidebar-admin/nav-item-admin/nav-item-admin.component';
import { BrandingAdminComponent } from './layout/fullpage-admin/sidebar-admin/branding.component';
import { CreateWebsiteDialogComponent } from './Model/userinfomodal/create-website-dialog/CreateWebsiteDialogComponent';
import { CreateUserDialogComponent } from './Model/userinfomodal/create-user-dialog/create-user-dialog.component';

@NgModule({
  declarations: [
    CreateWebsiteDialogComponent,
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DBUpageComponent,
    PFUpageComponent,
    UserinfomodalComponent,
    BlankComponent,
    FullpageComponent,
    HeaderComponent,
    SidebarComponent,
    BrandingComponent,
    AppNavItemComponent,
    FullpageAdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    NavItemAdminComponent,
    BrandingAdminComponent,
    CreateUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    MatSlideToggleModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
