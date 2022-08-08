import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidebarOpened: boolean = false;

  constructor() {}

  ngOnInit() {}
}
