import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';
import { IonicModule } from '@ionic/angular';
import { CartPage } from './cart.page';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [CartPage, CartItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    CommonComponentsModule,
    IonicModule
  ]
})
export class CartModule { }
