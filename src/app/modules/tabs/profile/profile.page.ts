import { Component } from '@angular/core';
import { IProfileMenu } from './models/i-profile-menu';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  menuList: Array<IProfileMenu> = [
    {
      icon: 'person-outline',
      label: 'Il mio Account'
    },
    {
      icon: 'notifications-outline',
      label: 'Notifiche'
    },
    {
      icon: 'settings-outline',
      label: 'Impostazioni'
    },
    {
      icon: 'help-circle-outline',
      label: 'Help Center'
    },
    {
      icon: 'log-out-outline',
      label: 'Log Out'
    }
  ];

}
