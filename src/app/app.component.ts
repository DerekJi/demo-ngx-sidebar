import { Component } from '@angular/core';
import { SampleTreeMenu } from './data/sample-tree-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-ngx-sidebar';

  menu = SampleTreeMenu;
}
