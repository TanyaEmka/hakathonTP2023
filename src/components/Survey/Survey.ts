import template from './Survey.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

interface SurveyPropsType {
    name: string,
}

export class Survey extends Component {
    surveyProps: SurveyPropsType;
    context: ContextType;

    constructor(surveyProps: SurveyPropsType, props?: Props) {
        super(template, props);
        this.surveyProps = surveyProps;
        this.context = {
            name: this.surveyProps.name
        }
    }

    render(): HTMLElement {
        this.domElement = stringToElement(this.tmpl(this.context));

        return this.domElement;
    }
}