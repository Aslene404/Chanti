import { NgModule } from '@angular/core';
import { FrontSingupComponent } from './front-singup/front-singup.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { FrontSinginComponent } from './front-singin/front-singin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { UserService } from './user.service';




@NgModule({
  declarations: [
    FrontSinginComponent,
    FrontSingupComponent,
    UserLogoutComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    FrontSinginComponent,
    FrontSingupComponent,
    UserLogoutComponent
  ],
  providers: [UserService]
})
export class UserModule { }
