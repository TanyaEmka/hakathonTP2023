export abstract class Component {

    protected tmpl: Function;
    protected domElement?: HTMLElement | undefined;
    protected props?: Props | undefined;
    protected context: Props;

    constructor(tmpl: Function, context?: Props, props?: Props) {
        this.tmpl = tmpl;
        this.props = props;
        if (context) {
            this.context = structuredClone(context);
        } else {
            this.context = {};
        }
    }

    update() {
        if (!this.domElement) {
            throw new Error('domElement is null');
        }

        this.replace(this.domElement);
    }

    updateInnerElement(element: HTMLElement | undefined, newValue: PropValue) {
        if (!element) {
            throw new Error('element is null');
        }

        element.innerHTML = PropToString(newValue);
    }

    appendTo(element: HTMLElement): void {
        element.appendChild(this.render());
        this.domElement = Array.from(element.childNodes).at(-1) as HTMLElement;
    }

    replace(element: HTMLElement): void {
        element.after(this.render());
        this.domElement = element.nextSibling as HTMLElement;
        element.remove();
    }

    public abstract render(): HTMLElement;
}

const PropToString = (value: PropValue) : string => {
    if (!value)
        return "";
    if (typeof value === "number")
        return value.toString();
    if (typeof value === "string")
        return value;
    return "";
}