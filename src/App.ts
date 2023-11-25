import { Component } from "./snail/component";
import { Router, Route } from "./shared/services/router";

import { Button } from "./components/button/button";
import { Survey } from "./components/Survey/Survey";

import { Main } from "./pages/main/main";

class App extends Component {
    router: Router;

    constructor(props?: Props) {
        super(() => { console.log('Welcome to the App!') }, props);
        this.domElement = document.body.querySelector("#root") as HTMLElement;
        this.router = new Router([        
            new Route(new RegExp('^/$'), new Main()),
            new Route(new RegExp('^/signin$'), new Button({ name: 'signin' })),
            new Route(new RegExp('^/signup$'), new Button({ name: 'signup' })),
            new Route(new RegExp('^/survey$'), new Survey({ name: 'Опрос' })),
        ], this.domElement);
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error('App is undefined');
        }

        this.tmpl();
        return this.domElement;
    }
}

export default new App();