import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuItems } from './domain/menu';
import { MenuItem } from './domain/menu.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  menuItems: MenuItem[] = MenuItems;

  constructor(private translate: TranslateService) { }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.switchLanguage(newLang);
  }

  private switchLanguage(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }

}
