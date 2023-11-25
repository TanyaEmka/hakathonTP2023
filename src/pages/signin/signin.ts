import template from './signin.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';

import App from '../../App';

export class Signin extends Component {
    context: ContextType;

    constructor(props?: Props) {
        super(template, props);

        this.context = {};
        this.domElement = stringToElement(this.tmpl(this.context));
    }

    siginFunction() {
        App.router.navigateTo('/');
    }

    goToSignUpPage() {
        App.router.navigateTo('/signup');
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error("Sigin is undefined");
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
        const showPassBtn = new Button({ name: 'Показать пароль' });
        const signinBtn = new Button({ name: 'Войти', clickFunction: this.siginFunction.bind(this) });
        const signupBtn = new Button({ name: 'Зарегистрироваться', clickFunction: this.goToSignUpPage.bind(this) });

        this.domElement.querySelector("#email-input")?.replaceWith(emailInput.render());
        this.domElement.querySelector("#password-input")?.replaceWith(passwordInput.render());
        this.domElement.querySelector("#show-pass-btn")?.replaceWith(showPassBtn.render());
        this.domElement.querySelector("#signin-btn")?.replaceWith(signinBtn.render());
        this.domElement.querySelector("#signup-btn")?.replaceWith(signupBtn.render());

        return this.domElement;
    }
}