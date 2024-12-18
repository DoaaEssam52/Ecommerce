import { Component, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnDestroy {
  isLoadingPage: boolean = true;

  product!: Product;

  routeSubscription!: Subscription;
  productSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _products: ProductsService
  ) {
    this.routeSubscription = this.route.params.subscribe({
      next: ({ id }) => {
        this.getProductById(id);
      },
    });
  }

  getProductById(id: number): void {
    this.productSubscription = this._products.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.isLoadingPage = false;
      },
      error: () => {
        this.isLoadingPage = false;
      },
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.routeSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }
}
