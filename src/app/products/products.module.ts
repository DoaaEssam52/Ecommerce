import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsRoutingModule } from './products-routing.module';

import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [ListComponent, CardComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class ProductsModule {}
