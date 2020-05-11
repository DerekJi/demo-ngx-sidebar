import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TreeMenuModule } from '@pages/tree-menu/tree-menu.module';



@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    TreeMenuModule,
  ]
})
export class SidebarModule { }
