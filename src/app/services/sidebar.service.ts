import { Injectable } from '@angular/core';
import { MenuItems, SubMenu } from '../interfaces/menu-items';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  public subMenus: SubMenu[] =  [
    {title: 'Main', url: '/dashboard'},
    {title: 'ProgressBar', url: 'progress'},
    {title: 'Graphics', url: 'graphics1'}
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
