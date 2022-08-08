import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { IconsModule } from './../shared/icons.module';

@NgModule({
  imports: [CommonModule, RouterModule, IconsModule],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  exports: [RouterModule],
})
export class LayoutModule {}
