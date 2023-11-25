import { Component } from "./snail/component";
import { Button } from "./components/button/button";
import { Router, Route } from "./shared/services/router";

class App extends Component {
    router: Router;

    constructor(props?: Props) {
        super(() => { console.log('Welcome to the App!') }, props);
        this.domElement = document.body.querySelector("#root") as HTMLElement;
        this.router = new Router([        
            new Route(new RegExp('^/$'), new Button({ count: 30 })),
            new Route(new RegExp('^/signin$'), new Button({ count: 1 })),
            new Route(new RegExp('^/signup$'), new Button({ count: 2 })),
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