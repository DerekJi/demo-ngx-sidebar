import { Component, OnInit, Input, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { SidebarService } from '@core/sidebar.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Input() width = '250px';
  @Input() bgcolor: string;
  @Input() fgcolor: string;

  @ViewChild('sidebar', { read: ElementRef, static: false }) sidebar: ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setStyle('width', this.width);
  }

  /**
   *
   */
  get active$(): Observable<boolean> { return this.sidebarService.active$(); }

  /**
   *
   */
  get marginLeft$() {
    return this.active$.pipe(
      map((active) => active ? '0' : '-' + this.width)
    );
  }

  /**
   *
   */
  toggleActive(): void {
    this.sidebarService.toggleActive();
  }

  /**
   *
   * @param key css attribute name, for example, 'color'
   * @param value css attribute value, for example, '#fff'
   */
  private setStyle(key: string, value: any): void {
    if (value !== null && value !== undefined) {
      this.renderer.setStyle(this.sidebar.nativeElement, key, value);
    }
  }
}
