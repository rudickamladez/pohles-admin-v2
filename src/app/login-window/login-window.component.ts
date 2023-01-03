import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-login-window',
    templateUrl: './login-window.component.html',
    styleUrls: ['./login-window.component.scss']
})
export class LoginWindowComponent {
    state = 0;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit() {
    }

    loginClick() {
        this.document.location = '/admin';
    }

    registerClick() {
        this.document.location = '/admin';
    }

}
