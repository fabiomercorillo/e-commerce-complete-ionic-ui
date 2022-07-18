import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1-circular-button',
  templateUrl: './tab1-circular-button.component.html',
  styleUrls: ['./tab1-circular-button.component.scss'],
})
export class Tab1CircularButtonComponent {
  @Input() iconName: string;
  @Input() label: string;
}
