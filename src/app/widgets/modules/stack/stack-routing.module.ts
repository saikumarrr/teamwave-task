import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackListComponent } from './stack-list/stack-list.component';

const routes: Routes = [
  {
    // child routing
    // loading StackListComponent, after lazyLoading this stack module
    path: '',
    component: StackListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }
