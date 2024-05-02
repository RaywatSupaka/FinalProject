import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';
import { navItems } from './sidebar-data-admin';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit{

  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}

}
