import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenu } from './models/tree-menu.interface';
import { ITreeMenuNode } from './models/tree-menu-node.interface';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @Input() title = '';
  @Input() id?: string;
  @Input() nodes: ITreeMenuNode[];

  constructor() { }

  ngOnInit(): void {
  }

}
