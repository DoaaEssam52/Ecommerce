import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsRoutingModule } from './products-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';

import { FilterByKeyPipe } from './pipes/filter-by-key.pipe';
@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    DetailsComponent,
    FilterByKeyPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ProductsModule {}
