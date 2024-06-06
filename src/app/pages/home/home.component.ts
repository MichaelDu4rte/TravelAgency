import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { PopularHousesComponent } from '../../components/home/popular-houses/popular-houses.component';
import { ClientsTestimonyComponent } from '../../components/home/clients-testimony/clients-testimony.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, PopularHousesComponent, ClientsTestimonyComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
