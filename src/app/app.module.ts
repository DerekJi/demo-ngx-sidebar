import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SidebarModule } from '@pages/sidebar/sidebar.module';
import { ContentModule } from '@pages/content/content.module';
import { TreeMenuModule } from '@pages/tree-menu/tree-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    SidebarModule,
    ContentModule,
    TreeMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
