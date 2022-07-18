import { Component } from '@angular/core';
import { ITab1Menu } from '../../models/i-tab1-menu';

@Component({
  selector: 'app-tab1-menus',
  templateUrl: './tab1-menus.component.html',
  styleUrls: ['./tab1-menus.component.scss'],
})
export class Tab1MenusComponent {
  menus: Array<ITab1Menu> = [
    {
      iconName: 'flash-outline',
      label: 'Offerta lampo'
    },
    {
      iconName: 'newspaper-outline',
      label: 'Scuola'
    },
    {
      iconName: 'game-controller-outline',
      label: 'Giochi'
    },
    {
      iconName: 'bag-outline',
      label: 'Regali'
    },
    {
      iconName: 'help-outline',
      label: 'Altro'
    }
  ];
}
