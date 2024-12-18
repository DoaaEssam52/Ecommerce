import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  productsList: Product[] = [];
  productsSubscription!: Subscription;

  constructor(private _products: ProductsService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsSubscription = this._products.getAllProducts().subscribe({
      next: (response) => {
        this.productsList = response;
      },
      error: () => {},
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
