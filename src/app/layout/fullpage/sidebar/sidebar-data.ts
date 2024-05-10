import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '',
  },
  {
    navCap: 'Category',
  },
  {
    displayName: 'E-commerce',
    iconName: 'shopping-bag',
    route: '/ui-components/ecom',
  },
  {
    displayName: 'Social Media',
    iconName: 'brand-hipchat',
    route: '/ui-components/social',
  },
  {
    displayName: 'News',
    iconName: 'news',
    route: '/ui-components/news',
  },
  {
    displayName: 'Educational',
    iconName: 'school',
    route: '/ui-components/education',
  },
  {
    displayName: 'Blogs',
    iconName: 'brand-blogger',
    route: '/ui-components/blogs',
  },
  {
    displayName: 'Insurance',
    iconName: 'ambulance',
    route: '/ui-components/insurance',
  },
];
