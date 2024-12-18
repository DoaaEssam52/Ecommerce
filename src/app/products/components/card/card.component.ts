import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: Product;

  constructor(private _router: Router) {}

  viewDetails(): void {
    this._router.navigateByUrl('products/' + this.product.id);
  }
}
