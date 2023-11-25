import template from './signup.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';

import App from '../../App';

export class Signup extends Component {
    context: ContextType;

    constructor(props?: Props) {
        super(template, props);

        this.context = {};
        this.domElement = stringToElement(this.tmpl(this.context));
    }

    signupFunction() {
        App.router.navigateTo('/');
    }

    goToSignInPage() {
        App.router.navigateTo('/signin');
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error("Signup is undefined");
        }

        const emailInput = new Input({
            value: '',
            type: 'text',
            placeholder: 'Введите почту'
        });
        const passwordInput = new Input({
            value: '',
            type: 'password',
            placeholder: 'Введите пароль'
        });
        const repeatPasswordInput = new Input({
            value: '',
            type: 'password',
            placeholder: 'Повторите пароль'
        });
        const showPassBtn = new Button({ name: 'Показать пароль' });
        const showRepeatPassBtn = new Button({ name: 'Показать пароль' });
        const signupBtn = new Button({ name: 'Зарегистрироваться', clickFunction: this.signupFunction.bind(this) });
        const signinBtn = new Button({ name: 'Войти', clickFunction: this.goToSignInPage.bind(this) });

        this.domElement.querySelector("#email-input")?.replaceWith(emailInput.render());
        this.domElement.querySelector("#password-input")?.replaceWith(passwordInput.render());
        this.domElement.querySelector("#repeat-password-input")?.replaceWith(repeatPasswordInput.render());
        this.domElement.querySelector("#show-pass-btn")?.replaceWith(showPassBtn.render());
        this.domElement.querySelector("#show-repeat-pass-btn")?.replaceWith(showRepeatPassBtn.render());
        this.domElement.querySelector("#signup-btn")?.replaceWith(signupBtn.render());
        this.domElement.querySelector("#signin-btn")?.replaceWith(signinBtn.render());

        return this.domElement;
    }
}