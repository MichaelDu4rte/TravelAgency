import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnChanges {
  @Input() criteria: string = '';

  products = [
    { name: 'Plaza Hotel', price: 500, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 5},
    { name: 'Panorama Duplex', price: 700, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 5 },
    { name: 'Estadia Grandiosa', price: 800, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 5 },
    { name: 'Cabana Vista Serena', price: 550, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 5 },
    { name: 'Paraíso Verde', price: 400, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/20507713/pexels-photo-20507713/free-photo-of-casas-residencias-jardim-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 1 },
    { name: 'Villa Lumina', price: 300, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/14191118/pexels-photo-14191118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 5 },
    { name: 'Residência Aconchegante', price: 600, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 3 },
    { name: 'Casa Bela Vista', price: 450, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 4 },
    { name: 'Morada do Sol', price: 350, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 2 },
    { name: 'Retiro Tranquilo', price: 480, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 3 },
    { name: 'Casa do Lago', price: 650, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 4 },
    { name: 'Apertamente Central', price: 550, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 3 },
    { name: 'Chalé das Montanhas', price: 400, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 2 },
    { name: 'Casa Campo Sereno', price: 500, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 4 },
    { name: 'Cobertura Luxo', price: 750, location: 'São Paulo, Brasil', imageUrl: 'https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', popularity: 3 }
  ];

  filteredProducts = [...this.products];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['criteria']) {
      this.filterProducts(this.criteria);
    }
  }

  filterProducts(criteria: string) {
    switch(criteria) {
      case 'todos':
        this.filteredProducts = [...this.products];
        break;
      case 'maisPopulares':
        this.filteredProducts = [...this.products].sort((a, b) => b.popularity - a.popularity);
        break;
      case 'menorPreco':
        this.filteredProducts = [...this.products].sort((a, b) => a.price - b.price);
        break;
      case 'maiorPreco':
        this.filteredProducts = [...this.products].sort((a, b) => b.price - a.price);
        break;
    }
  }
}
