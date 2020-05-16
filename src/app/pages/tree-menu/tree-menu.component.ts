import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenu } from './models/tree-menu.interface';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @Input() menu: ITreeMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
