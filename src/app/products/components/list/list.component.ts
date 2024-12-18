import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/products.service';

import { FilterByKeyPipe } from '../../pipes/filter-by-key.pipe';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  filteredProducts: Product[] = [];
  productsList: Product[] = [];

  title: any;

  filterByKeyPipe = new FilterByKeyPipe();

  productsSubscription!: Subscription;

  constructor(private _products: ProductsService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsSubscription = this._products.getAllProducts().subscribe({
      next: (response) => {
        this.productsList = response;
        this.filteredProducts = response;
      },
    });
  }

  submitFilter(): void {
    this.filteredProducts = [...this.productsList];

    if (this.title) {
      this.filteredProducts = this.filterByKeyPipe.transform(
        this.productsList,
        'title',
        this.title
      );
    }
  }

  resetFilter(): void {
    this.title = '';

    this.submitFilter();
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
