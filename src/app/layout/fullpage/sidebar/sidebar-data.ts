import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/user',
  },
  {
    navCap: 'Category',
  },
  {
    displayName: 'E-commerce',
    iconName: 'shopping-bag',
    route: '/user/ui-components/ecom',
  },
  {
    displayName: 'Social Media',
    iconName: 'brand-hipchat',
    route: '/user/ui-components/social',
  },
  {
    displayName: 'News',
    iconName: 'news',
    route: '/user/ui-components/news',
  },
  {
    displayName: 'Educational',
    iconName: 'school',
    route: '/user/ui-components/education',
  },
  {
    displayName: 'Blogs',
    iconName: 'brand-blogger',
    route: '/user/ui-components/blogs',
  },
  {
    displayName: 'Insurance',
    iconName: 'ambulance',
    route: '/user/ui-components/insurance',
  },
];
