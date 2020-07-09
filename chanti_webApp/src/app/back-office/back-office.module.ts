import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { BackHomeComponent } from './back-home/back-home.component';
import { FrontProjectsComponent } from './admin-projects/front-projects.component';
import { FrontUsersComponent } from './admin-users/front-users.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [AdminNavbarComponent,BackLandpageComponent, BackHomeComponent,FrontProjectsComponent,FrontUsersComponent,PageFooterComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[AdminNavbarComponent,PageFooterComponent]
})
export class BackOfficeModule { }
