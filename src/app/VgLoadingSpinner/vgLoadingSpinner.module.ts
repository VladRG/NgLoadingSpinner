import { NgModule } from '@angular/core';

import { VgLoadingSpinnerComponent } from './vgLoadingSpinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VgLoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VgLoadingSpinnerComponent
  ]
})
export class VgLoadingModule { }
