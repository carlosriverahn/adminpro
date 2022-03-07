import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/interfaces/menu-items';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItems[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menuItems;
  }

  ngOnInit(): void {
  }

}
