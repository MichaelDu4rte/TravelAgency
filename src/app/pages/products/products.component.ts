import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductsListComponent } from '../../components/products/products-list/products-list.component';
import { ProductsRecommendedComponent } from '../../components/products/products-recommended/products-recommended.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, ProductsListComponent, ProductsRecommendedComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
