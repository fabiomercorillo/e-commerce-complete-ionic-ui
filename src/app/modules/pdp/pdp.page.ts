import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductItem } from 'src/app/common/models/i-product-item';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.page.html',
  styleUrls: ['./pdp.page.scss'],
})
export class PdpPage implements OnInit {
  product: IProductItem;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: IProductItem) => {
        this.product = params;
      }
    );
  }
}
