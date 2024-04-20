import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from 'src/app/service/nav.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit{

  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
