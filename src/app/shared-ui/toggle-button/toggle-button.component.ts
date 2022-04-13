import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent  {
  @Output() changed = new EventEmitter<any>();
}

