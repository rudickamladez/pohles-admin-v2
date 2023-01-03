import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationLayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import * as Auth from '../core/services/services-auth';

const routes: Routes = [
    {
        path: '',
        component: AdministrationLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            // {
            //     path: 'tickets',
            //     canActivateChild: [Auth.ChildAuthGuardService],
            //     loadChildren: () => import('./tickets/tickets.module').then(mod => mod.TicketsModule)
            // },
            {
                path: '**',
                pathMatch: 'full',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }
