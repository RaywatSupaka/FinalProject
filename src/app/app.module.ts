import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResgistComponent } from './resgist/resgist.component';
import { HttpClientModule  } from '@angular/common/http';
import { InformationComponent } from './information/information.component';
import { NewspageComponent } from './newspage/newspage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResgistComponent,
    InformationComponent,
    NewspageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
