import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { ClientNavbarComponent } from './client-navbar/client-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

import { MaterialModule } from '../shared/material/material.module';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FrontSinginComponent } from './front-singin/front-singin.component';
import { FrontSingupComponent } from './front-singup/front-singup.component';
import { FrontProjectsComponent } from './front-projects/front-projects.component';
import { FrontUsersComponent } from './front-users/front-users.component';


@NgModule({
  declarations: [
    ClientNavbarComponent,
    AdminNavbarComponent,
    PageFooterComponent,
    ClientHomeComponent,
    ClientContactComponent,
    FrontLandpageComponent,
    ClientAboutComponent,
    FrontSinginComponent,
    FrontSingupComponent,
    FrontProjectsComponent,
    FrontUsersComponent],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  
  exports: [ClientNavbarComponent,ClientHomeComponent,AdminNavbarComponent,FrontProjectsComponent,FrontUsersComponent]
  
})
export class FrontOfficeModule { }
