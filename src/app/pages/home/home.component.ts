import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { PopularHousesComponent } from '../../components/popular-houses/popular-houses.component';
import { ClientsTestimonyComponent } from '../../components/clients-testimony/clients-testimony.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, PopularHousesComponent, ClientsTestimonyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
