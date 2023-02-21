import { NgModule } from '@angular/core';
import { DataHeaderComponent } from './data-header.component';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import {SlideMenuModule} from 'primeng/slidemenu';

import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    DataHeaderComponent
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    MegaMenuModule,
    InputTextModule,
    SidebarModule,
    PanelMenuModule,
    StyleClassModule,
    BreadcrumbModule,
    SlideMenuModule,
    MenuModule,
    OverlayPanelModule
  ],
  exports: [
    DataHeaderComponent
  ]
})
export class DataHeaderModule { }
