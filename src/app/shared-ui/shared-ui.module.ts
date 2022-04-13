import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoImgDirective } from './directives/no-img.directive';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';


@NgModule({
  declarations: [NoImgDirective, ToggleButtonComponent],
  imports: [CommonModule],
  exports: [
    NoImgDirective,
    ToggleButtonComponent
  ],
})
export class SharedUIModule {}
