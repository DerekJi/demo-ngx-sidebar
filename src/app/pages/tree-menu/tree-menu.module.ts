import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMenuComponent } from './tree-menu.component';



@NgModule({
  declarations: [TreeMenuComponent],
  exports: [TreeMenuComponent],
  imports: [
    CommonModule
  ]
})
export class TreeMenuModule { }
