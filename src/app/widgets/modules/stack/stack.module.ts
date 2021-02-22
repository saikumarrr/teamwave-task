import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackRoutingModule } from './stack-routing.module';
import { StackListComponent } from './stack-list/stack-list.component';
import { StackService } from './../../services/stack.service';
import { StackQuestnDetailsComponent } from './stack-questn-details/stack-questn-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StackListComponent, StackQuestnDetailsComponent],
  imports: [
    CommonModule,
    StackRoutingModule,

    FormsModule
  ],
  providers: [StackService], // injecting custom service
  exports: [StackListComponent]
})
export class StackModule { }
