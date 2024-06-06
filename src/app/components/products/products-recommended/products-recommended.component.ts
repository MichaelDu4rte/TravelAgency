import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-recommended',
  standalone: true,
  imports: [],
  templateUrl: './products-recommended.component.html',
  styleUrl: './products-recommended.component.scss'
})
export class ProductsRecommendedComponent {
  @Output() filterCriteria = new EventEmitter<string>();
  selectedCriteria: string = 'todos';

  ngOnInit() {
    this.setFilter(this.selectedCriteria);  
  }

  setFilter(criteria: string) {
    this.selectedCriteria = criteria;
    this.filterCriteria.emit(criteria);
  }
}
