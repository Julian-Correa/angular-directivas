import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBasicComponent } from './list-basic/list-basic.component';



@NgModule({
  declarations: [
    ListBasicComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    ListBasicComponent
  ]
})
export class ListsModule { }
