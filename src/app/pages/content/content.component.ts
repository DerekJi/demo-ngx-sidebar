import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@pages/core/sidebar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    private sidebar: SidebarService,
  ) { }

  ngOnInit(): void {
  }

  get sidebarActive$() {
    return this.sidebar.active$();
  }

  toggleSidebar() {
    this.sidebar.toggleActive();
  }
}
