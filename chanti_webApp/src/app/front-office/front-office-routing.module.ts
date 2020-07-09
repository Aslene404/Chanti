import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { FrontSinginComponent } from './front-singin/front-singin.component';
import { FrontSingupComponent } from './front-singup/front-singup.component';
import { FrontProjectsComponent } from './front-projects/front-projects.component';
import { FrontStaffComponent } from './front-staff/front-staff.component';



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
        path: 'signin', component: FrontSinginComponent
      },
      {
        path: 'register',
        component: FrontSingupComponent
      },
      {
        path: 'projects',
        component: FrontProjectsComponent
        //canActivate:[AuthGuard]
      },
      {
        path: 'staff',
        component: FrontStaffComponent
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
