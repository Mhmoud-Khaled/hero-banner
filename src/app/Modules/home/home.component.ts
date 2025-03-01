import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";
import { CardFeaturesComponent } from "./card-features/card-features.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, CardFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
