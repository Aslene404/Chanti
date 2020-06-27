import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { ClientNavbarComponent } from './client-navbar/client-navbar.component';


@NgModule({
  declarations: [ClientNavbarComponent],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
