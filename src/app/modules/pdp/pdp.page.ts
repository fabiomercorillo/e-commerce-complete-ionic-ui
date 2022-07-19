import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get } from 'lodash';
import { IProductItem } from 'src/app/common/models/i-product-item';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.page.html',
  styleUrls: ['./pdp.page.scss'],
})
export class PdpPage implements OnInit {
  product: IProductItem;
  selectedImg: string;
  headerColor = '#f6f6f6';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: IProductItem) => {
        this.product = params;
        this.selectedImg = get(this.product?.images, 0);
      }
    );
  }

  onThumbnailClick(i: string): void {
    this.selectedImg = i;
  }
}
