import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { ClientNavbarComponent } from './client-navbar/client-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ClientQuoteComponent } from './client-quote/client-quote.component';
import { ClientIntroComponent } from './client-intro/client-intro.component';
import { ClientCommentComponent } from './client-comment/client-comment.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ClientNavbarComponent,
    AdminNavbarComponent,
    PageFooterComponent,
    ClientQuoteComponent,
    ClientIntroComponent,
    ClientCommentComponent],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MaterialModule
  ],
  exports:[AdminNavbarComponent]
})
export class FrontOfficeModule { }
