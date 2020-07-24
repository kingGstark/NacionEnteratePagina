import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Principal',  icon: 'ni-tv-2 text-primary', class: '' },
  
    { path: '/maps', title: 'Mapa',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Perfil de usuario',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Obras',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Acceder',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Registrarse',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
