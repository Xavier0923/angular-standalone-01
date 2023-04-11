import { Route } from '@angular/router';
import { ProductComponent } from '../product/product.component';

export const ProductsRoutes: Route[] = [
  {
    path: 'product',
    component: ProductComponent,
  },
];
