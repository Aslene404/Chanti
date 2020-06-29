import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'front',
    loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule),
  },
  
  { path: '**', redirectTo: 'front', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
