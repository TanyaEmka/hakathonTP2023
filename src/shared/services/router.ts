import { Component } from "../../snail/component";

export class Route {
    path: RegExp;
    component: Component;
    routes: any;

    constructor(path: RegExp, component: Component, routes: any = null) {
        this.path = path;
        this.component = component;
        this.routes = routes;
    }
}

export class Router {
    container: HTMLElement;
    routes: Array<Route>

    constructor(routes: Array<Route>, container: HTMLElement) {
        this.container = container;
        this.routes = routes;
        this.init();
        this.loadRoute();
    }

    init() {
        window.addEventListener('popstate', () => this.loadRoute());
    }

    addRoutes(routes: Array<Route>) {
        this.routes = routes;
        this.init();
        this.loadRoute();
    }

    navigateTo(url: string, state: any) {
        history.pushState(state, "", url);
        this.loadRoute();
    }

    async loadRoute() {
        const route = this.routes.find((r) => r.path.exec(location.pathname));

        this.container.innerHTML = '';

        const component = route?.component.render();

        if (component){
            this.container.append(component);
        }

    }
}
