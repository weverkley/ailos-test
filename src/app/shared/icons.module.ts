import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faBuildingColumns,
  faList,
  faMagnifyingGlass,
  faHome,
  faUser,
  faCheckCircle,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faStar,
  faCommentDots,
} from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBell,
      faBars,
      faMagnifyingGlass,
      faStar,
      faCommentDots,
      faList,
      faBuildingColumns,
      faHome,
      faUser,
      faCheckCircle,
      faCreditCard
    );
  }
}
