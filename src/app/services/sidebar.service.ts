import { Injectable } from '@angular/core';
import { MenuItems, SubMenu } from '../interfaces/menu-items';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  public subMenus: SubMenu[] =  [
    {title: 'Main', url: '/dashboard'},
    {title: 'Graphics', url: 'graphics1'},
    {title: 'rxjs', url: 'rxjs'},
    {title: 'Promises', url: 'promises'},
    {title: 'ProgressBar', url: 'progress'},
  ]

  public menuItems: MenuItems[] = [
    {
      title: 'dashboard',
      icon: 'mdi mdi-gauge',
      submenus: this.subMenus
    }
  ]


  constructor() { }




}
