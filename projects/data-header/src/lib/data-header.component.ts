import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'lib-DataHeader',
  templateUrl: './data-header.component.html',
  styles: [`

    ::ng-deep .p-panelmenu .p-panelmenu-header-link:focus,
    ::ng-deep button.p-button:focus {
        box-shadow: none !important;
    }

    :host ::ng-deep button.p-button.p-button-text.p-button-plain {
      color:#dddddd;
    }

    :host ::ng-deep button {
        margin-right: .4em;
    }

    :host ::ng-deep .p-megamenu {
      border: none;
      background:none;
    }

    :host ::ng-deep .p-megamenu .p-menuitem-link .p-menuitem-icon, 
    :host ::ng-deep .p-megamenu .p-menuitem-link .p-submenu-icon {
      color:#dddddd!important;
    }

    :host ::ng-deep .p-megamenu .p-megamenu-submenu .p-menuitem .p-menuitem-link .p-menuitem-text,
    :host ::ng-deep .p-menu .p-menuitem .p-menuitem-link .p-menuitem-text{
      color:#333333!important;
      font-size:0.8rem;
    }

    :host ::ng-deep .p-megamenu .p-menuitem-text {
      color:#dddddd!important;
    }

    :host ::ng-deep .p-megamenu .p-menuitem-link:not(.p-disabled):hover,
    :host ::ng-deep .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link, 
    :host ::ng-deep .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover{
      background:none!important;
    }

    :host ::ng-deep .p-megamenu .p-megamenu-submenu .p-menuitem-link:not(.p-disabled):hover,
    :host ::ng-deep .p-megamenu .p-megamenu-submenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link, 
    :host ::ng-deep .p-megamenu .p-megamenu-submenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover{
      background:#efefef!important;
    }

    :host ::ng-deep .p-megamenu .p-menuitem-link:focus{
      box-shadow:none!important;
    }

    
    :host ::ng-deep .p-breadcrumb{
      border-radius: 0;
    }

    :host ::ng-deep .p-breadcrumb ul li .p-menuitem-link:focus{
      box-shadow: none;
    }

  `]
})
export class DataHeaderComponent implements OnInit {
  @Input() menuItems : MenuItem[] = [];
  megaMenuitems: MegaMenuItem[] = [];
  items: MenuItem[] = [];
  userItems: MenuItem[] = [];
  home: MenuItem;
  @Input() logoFileName: string = '';
  display: any;
  displayr: any;
  displayt: any;
  constructor(private primengConfig: PrimeNGConfig) {
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.log(this.menuItems);
    console.log(this.logoFileName);
    this.items = [
      {label:'Categories'},
      {label:'Sports'},
      {label:'Football'}
    ];
    this.userItems = [
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ];
    this.megaMenuitems = [
      {
          label: 'Videos', icon: 'pi pi-fw pi-video',
          items: [
              [
                  {
                      label: 'Video 1',
                      items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                  },
                  {
                      label: 'Video 2',
                      items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Video 3',
                      items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                  },
                  {
                      label: 'Video 4',
                      items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Users', icon: 'pi pi-fw pi-users',
          items: [
              [
                  {
                      label: 'User 1',
                      items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                  },
                  {
                      label: 'User 2',
                      items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                  },
              ],
              [
                  {
                      label: 'User 3',
                      items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                  },
                  {
                      label: 'User 4',
                      items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                  }
              ],
              [
                  {
                      label: 'User 5',
                      items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                  },
                  {
                      label: 'User 6',
                      items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Events', icon: 'pi pi-fw pi-calendar',
          items: [
              [
                  {
                      label: 'Event 1',
                      items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                  },
                  {
                      label: 'Event 2',
                      items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Event 3',
                      items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                  },
                  {
                      label: 'Event 4',
                      items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Settings', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
    ]
  }

}
