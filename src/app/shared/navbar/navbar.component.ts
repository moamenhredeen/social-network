import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label:'Posts',
        icon:'pi pi-fw pi-file',
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
      },
      {
        label:'Profile',
        icon:'pi pi-fw pi-user',
      },
      {
        label:'Settings',
        icon:'pi pi-fw pi-cog',
      }
    ];
  }

}
