import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { ClientNavbarComponent } from './client-navbar/client-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

import { MaterialModule } from '../shared/material/material.module';
import { ClientHomeComponent } from './client-home/client-home.component';


@NgModule({
  declarations: [
    ClientNavbarComponent,
    AdminNavbarComponent,
    PageFooterComponent,
    ClientHomeComponent],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MaterialModule
  ],
  exports: [ClientNavbarComponent,ClientHomeComponent,AdminNavbarComponent]
  
})
export class FrontOfficeModule { }
