import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/layout/fullpage-admin/sidebar-admin/nav-item-admin/nav-item-admin';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-nav-item-admin',
  templateUrl: './nav-item-admin.component.html',
  styleUrls: ['./nav-item-admin.component.css']
})
export class NavItemAdminComponent {
  @Input() item: NavItem | any;
  @Input() depth: any;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0,
    });
  }
}
