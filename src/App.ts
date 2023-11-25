import { Component } from "./snail/component";
import { Button } from "./components/button/button";

class App extends Component {

    constructor(props?: Props) {
        super(() => { console.log('Welcome to the App!') }, props);
    }

    render(): HTMLElement {
        this.domElement = document.body.querySelector("#root") as HTMLElement;
        this.tmpl();

        const btn = new Button({ count: 0 });
        btn.appendTo(this.domElement);

        return this.domElement;
    }
}

export default new App();