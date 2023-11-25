import { Component } from "./snail/component";
import { Router, Route } from "./shared/services/router";

import { Survey } from "./components/Survey/Survey";

import { Main } from "./pages/main/main";
import { Signin } from "./pages/signin/signin";
import { Signup } from "./pages/signup/signup";

class App extends Component {
    router: Router;
    MainPage: Main;

    constructor(props?: Props) {
        super(() => { console.log('Welcome to the App!') }, props);
        this.domElement = document.body.querySelector("#root") as HTMLElement;
        this.MainPage = new Main();
        this.router = new Router([        
            new Route(new RegExp('^/$'), this.MainPage),
            new Route(new RegExp('^/signin$'), new Signin()),
            new Route(new RegExp('^/signup$'), new Signup()),
            new Route(new RegExp('^/survey$'), new Survey()),
        ], this.domElement);
    }

    goToMainPage() {
        this.router.navigateTo("/");
    }

    updateMainPage() {
        this.MainPage.closeSurvey();
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