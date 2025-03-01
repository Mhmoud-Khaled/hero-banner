import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
