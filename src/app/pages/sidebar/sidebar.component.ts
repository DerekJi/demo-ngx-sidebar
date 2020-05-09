import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@pages/core/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebar: SidebarService) { }

  ngOnInit(): void {
  }

  get active$(): Observable<boolean> { return this.sidebar.active$(); }

  toggleActive(): void { this.sidebar.toggleActive(); }

}
