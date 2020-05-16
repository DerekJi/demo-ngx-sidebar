import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenuNode } from '../models/tree-menu-node.interface';

@Component({
  selector: 'app-tree-menu-node',
  templateUrl: './tree-menu-node.component.html',
  styleUrls: ['./tree-menu-node.component.scss']
})
export class TreeMenuNodeComponent implements OnInit {

  @Input() node: ITreeMenuNode;

  constructor() { }

  ngOnInit(): void {
  }

}
