import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientAboutComponent } from './client-about/client-about.component';

import { FrontProjectsComponent } from './front-projects/front-projects.component';
import { FrontStaffComponent } from './front-staff/front-staff.component';
import {EditProjectComponent} from './edit-project/edit-project.component'

import { FrontSingupComponent } from '../shared/user/front-singup/front-singup.component';
import { SigninComponent } from '../shared/user/signin/front-singin.component';
import { AuthGuard } from '../_gards/auth.guard';
import { StaffCallComponent } from './staff-call/staff-call.component';


const routes: Routes = [
  {
    path: '', component: FrontLandpageComponent,
    children: [
      {
        path: 'home',
        component: ClientHomeComponent
      },
      {
        path: 'contact',
        component: ClientContactComponent,
        //canActivate:[AuthGuard]
      },
      {
        path: 'about',
        component: ClientAboutComponent,
        //canActivate:[AuthGuard]
      },
      
      {
        path: 'signin', component: SigninComponent
      },
      {
        path: 'register',
        component: FrontSingupComponent
      },
      {
        path: 'projects',
        component: FrontProjectsComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'projects/edit/:id',
        component: EditProjectComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'staff',
        component: FrontStaffComponent
        //canActivate:[AuthGuard]
      },
      {
        path: 'staff/call',
        component: StaffCallComponent
        //canActivate:[AuthGuard]
      },
      
      /*
      {
        path:'user-settings',
        component:UpdateUserSettingsComponent
      },*/
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
