import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopComponent } from './loop/loop.component';



@NgModule({
  declarations: [
    IfElseComponent,
    LoopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IfElseComponent,
    LoopComponent
  ]
})
export class SyntaxesModule { }
