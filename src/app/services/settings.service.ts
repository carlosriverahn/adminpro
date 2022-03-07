import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const themeColorUrl: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', themeColorUrl)
  }

  changeColor(color: string) {
    const url = `./assets/css/colors/${ color }.css`;
    localStorage.setItem('theme', url);
    this.linkTheme?.setAttribute('href', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach(element => {
      const color = element.getAttribute('data-theme')
      const selectedTheme = `./assets/css/colors/${ color }.css`;
      const curentTheme = this.linkTheme?.getAttribute('href');

      element.classList.remove('working');

      if ( selectedTheme === curentTheme  ) {
        element.classList.add('working');
      }
    });
  }


}
