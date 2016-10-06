import { Component, Input } from '@angular/core';

@Component({
  selector: 'githunt-info-label',
})
export class InfoLabelComponent {
  @Input() label;
  @Input() value;
}
