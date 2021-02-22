import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', // if null route, redirect to dashboard
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [ // child routing
      {
        path: 'stack', 
        loadChildren: './widgets/modules/stack/stack.module#StackModule' // lazyLoading custom module
      }
    ]
  },
  {
    path: "**", // if wrong path redirect to dashboard component
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
