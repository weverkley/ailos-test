import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ailos-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit() {}

  sidebarOpened(val: boolean) {
    this.opened = val;
  }
}
