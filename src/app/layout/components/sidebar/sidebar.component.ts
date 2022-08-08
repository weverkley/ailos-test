import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ailos-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public opened: boolean = false;
  @Output() sidebarOpened = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSidebar(e: MouseEvent) {
    this.opened = !this.opened;
    this.sidebarOpened.emit(this.opened);
  }
}
