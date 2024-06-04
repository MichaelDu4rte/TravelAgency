import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
