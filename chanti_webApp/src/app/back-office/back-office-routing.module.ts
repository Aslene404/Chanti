import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontProjectsComponent } from './admin-projects/front-projects.component';
import { FrontUsersComponent } from './admin-users/front-users.component';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { BackHomeComponent } from './back-home/back-home.component';


const routes: Routes = [
  {
    
    path: '', component: BackLandpageComponent,
    children: [
      {
        path: 'home',
        component: BackHomeComponent
      },


      {
        path: 'projects',
        component: FrontProjectsComponent
      },
      {
        path: 'users',
        component: FrontUsersComponent
      },

      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
