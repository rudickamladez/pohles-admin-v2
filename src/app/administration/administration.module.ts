import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationLayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './layout/nav-bar-item/nav-bar-item.component';
import { LoggedUserComponent } from './layout/logged-user/logged-user.component';
import { NavBarSubitemComponent } from './layout/nav-bar-subitem/nav-bar-subitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        RouterModule,
        DataTablesModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ]
})
export class AdministrationModule { }
