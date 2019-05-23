import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {MainComponent} from './main';
import {AdminComponent} from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DonorsComponent} from './donors/donors.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {RoomsComponent} from './rooms/rooms.component';
import {DonationsComponent} from './donations/donations.component';
import {NewTempleComponent} from './new-temple/new-temple.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutComponent} from './layout/layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {ApiServices} from './services/api.services';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    AdminComponent,
    DonorsComponent,
    ContactComponent,
    AboutComponent,
    RoomsComponent,
    DonationsComponent,
    NewTempleComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    SlideshowModule,
    NgbModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [ApiServices],
  bootstrap: [AppComponent],
  exports: [
    LayoutComponent,
    MainComponent,
    AdminComponent,
    DonorsComponent,
    ContactComponent,
    AboutComponent,
    RoomsComponent,
    DonationsComponent,
    NewTempleComponent,
    NavbarComponent
  ]
})
export class AppModule { }
