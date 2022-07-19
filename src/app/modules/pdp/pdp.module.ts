import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpRoutingModule } from './pdp-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';
import { PdpPage } from './pdp.page';


@NgModule({
  declarations: [PdpPage],
  imports: [
    CommonModule,
    PdpRoutingModule,
    CommonComponentsModule,
    IonicModule
  ]
})
export class PdpModule { }
