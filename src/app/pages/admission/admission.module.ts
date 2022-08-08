import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdmissionComponent } from './admission.component';
import { IconsModule } from 'src/app/shared/icons.module';

import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdmissionComponent],
})
export class AdmissionModule {}
