import {PERMISSIONS} from './constants';

export const  MENUITEMS = [
  { path: '/dashboard/dynamic-contents/members/', title: 'Members Directory', icon: 'fas fa-users', permission: PERMISSIONS.MEMBER , isNotDisabled: false, translateKey: 'MENU.MEMBERSDIRECTORY'},
  { path: '/dashboard/dynamic-contents/payment/', title: 'Payment', icon: 'fas fa-money-check', permission: PERMISSIONS.PAYMENT, isNotDisabled: false , translateKey: 'MENU.PAYMENT'},
  { path: '/dashboard/dynamic-contents/message/', title: 'Message', icon: 'fas fa-comment-alt', permission: PERMISSIONS.MESSAGE, isNotDisabled: false , translateKey: 'MENU.MESSAGE'},
  { path: '/dashboard/dynamic-contents/vin-search/', title: 'VIN Search', icon: 'fas fa-car-side', permission: PERMISSIONS.VINSEARCH, isNotDisabled: false , translateKey: 'MENU.VINSEARCH'},
  { path: '/dashboard/dynamic-contents/parts-interchaging/', title: 'Parts Interchange', icon: 'fas fa-address-card', permission: PERMISSIONS.PARTSINTERCHANGE , isNotDisabled: false , translateKey: 'MENU.PARTSINTERCHANGE'},
  { path: '/dashboard/dynamic-contents/search-inventory/', title: 'Search Inventory', icon: 'fas fa-address-card', permission: PERMISSIONS.SEACRHINVENTORY, isNotDisabled: false , translateKey: 'MENU.SEARCHINVENTORY'},
  { path: '/dashboard/dynamic-contents/invoice-customers/', title: 'Invoice Customers', icon: 'fas fa-file-invoice', permission: PERMISSIONS.INVOICECUSTOMER, isNotDisabled: false , translateKey: 'MENU.INVOICECUSTOMERS'},
  { path: '/dashboard/dynamic-contents/dvm-processing/', title: 'DVM Processing', icon: 'fas fa-procedures', permission: PERMISSIONS.DVMPROCESSING, isNotDisabled: false , translateKey: 'MENU.DVMPROCESSING'},
  { path: '/dashboard/dynamic-contents/car-auctions/', title: 'Car Auctions', icon: 'fas fa-gavel', permission: PERMISSIONS.CARAUCTIONS, isNotDisabled: false , translateKey: 'MENU.CARAUCTIONS' },
  { path: '/dashboard/dynamic-contents/trade-car-parts/',  title: 'Trade Car Parts', icon: 'fas fa-shopping-cart', permission: PERMISSIONS.TRADECARPARTS, isNotDisabled: false , translateKey: 'MENU.TRADECARPARTS'}
];

