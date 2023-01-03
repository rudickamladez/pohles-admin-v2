import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationLayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './layout/nav-bar-item/nav-bar-item.component';
import { LoggedUserComponent } from './layout/logged-user/logged-user.component';
import { NavBarSubitemComponent } from './layout/nav-bar-subitem/nav-bar-subitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AdministrationLayoutComponent,
        NavBarComponent,
        NavBarItemComponent,
        LoggedUserComponent,
        NavBarSubitemComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        // SharedModule
    ]
})
export class AdministrationModule { }
