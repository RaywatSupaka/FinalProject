import { NavItem } from './nav-item-admin/nav-item-admin';

export const navItems: NavItem[] = [
  {
    navCap: 'Dashboard',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/admin',
  },
  {
    navCap: 'user-management',
  },
  {
    displayName: 'User Controller',
    iconName: 'user-cog',
    route: '/admin/ui-dashboard/userManagement',
  },
  {
    navCap: 'website-management',
  },
  {
    displayName: 'Website Controller',
    iconName: 'sitemap',
    route: '/admin/ui-dashboard/websiteManagement',
  },
  {
    navCap: 'Auth-Permission',
  },
  {
    displayName: 'Permission',
    iconName: 'mood-smile',
    route: '/admin',
  },
];
