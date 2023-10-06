import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-window',
    templateUrl: './login-window.component.html',
    styleUrls: ['./login-window.component.scss']
})
export class LoginWindowComponent {
    state = 0;
    public loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit() {
    }

    submitLoginForm() {
        // this.document.location = '/admin';
        console.log(
            'login',
            this.loginForm.value.username,
            this.loginForm.value.password
        )
    }

    registerClick() {
        this.document.location = '/admin';
    }

}
