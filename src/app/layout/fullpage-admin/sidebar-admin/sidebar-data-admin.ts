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
    displayName: 'Register',
    iconName: 'user-cog',
    route: '/admin',
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
    displayName: 'Website Controller',
    iconName: 'user-cog',
    route: '/admin',
  },
  {
    navCap: 'Auth-Permission',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
