import { Component, Input } from '@angular/core';

@Component({
  selector: 'githunt-info-label',
  templateUrl: 'info-label.component.html'
})
export class InfoLabelComponent {
  @Input() label;
  @Input() value;
}
