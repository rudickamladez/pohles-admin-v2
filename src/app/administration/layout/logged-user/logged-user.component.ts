import { Component } from '@angular/core';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})
export class LoggedUserComponent {
  currentUser = {
    id: 0,
    name: 'Dev User',
    nickname: 'Devuuuu',
    email: 'dev.user@rudickamladez.cz',
  };
  formatedRoles = 'All';

  get currentUserNickname(): string {
    return this.currentUser && this.currentUser.nickname ? this.currentUser.nickname : this.currentUser.name;
  }

  logout() {}

}