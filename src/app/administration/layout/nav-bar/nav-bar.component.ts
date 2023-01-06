import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/core/services/services-auth/auth.service';
import { MenuItem, MenuSubItem } from './menu-items';
// import { MenuBuilder } from './menu-builder';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    logoutItem =  new MenuItem('Log out', '', 'fa-sign-out-alt', () => this.logout());

    availableItems: MenuItem[] = [];
    visible = false;

    constructor(
        // private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.visible = history.state.navBarVisible ?? false;
        this.availableItems = [new MenuItem('Můj účet', `/admin/users/detail/1`, 'fa-user', () => {})];
        // [
        //     this.getMenuItem('Dashboard', '/admin/dashboard', 'fa-chart-line', () => this.getUsersSubItems()),
        //     new MenuItem('Tickets', '/admin/tickets', 'fa-ticket', () => console.log("tickets")),
        //     new MenuItem('Years', '/admin/years', 'fa-calendar-days', () => console.log("years"))
        // ].filter(o => o);

        // this.authService.getCurrentUser().subscribe(user => {
        //     this.availableItems = new MenuBuilder(this.authService).build(user);
        // });
    }

    toggle(): void {
        this.visible = !this.visible;
    }

    hide(): void {
        this.visible = false;
    }

    logout(): void {
        // this.authService.logout();
    }


    private getMenuItem(
        name: string, defaultLink: string, icon: string, getSubItems: () => MenuSubItem[]
    ): MenuItem {
        const menuItem = new MenuItem(name, defaultLink, icon, () => {});
        menuItem.subItems.push(...getSubItems());

        return menuItem.subItems.length === 0 ? menuItem : menuItem;
    }

    getUsersSubItems(): MenuSubItem[] {
        console.log("years start")
        const result: MenuSubItem[] = [];
        result.push(new MenuSubItem('Seznam uživatelů', '/admin/users'));
        result.push(new MenuSubItem('Vytvořit uživatele', '/admin/users/create'));
        result.push(new MenuSubItem('Zablokované karty', '/admin/users/cards'));
        console.log('years end')
        return result;
    }
}