import ajax from '../services/ajax';
import { SURVEY_API } from '../constants/survey_api';
import { AnswerProps } from '../../types/question';

interface BodyType {
    answers: Array<number>;
}

export const SurveyAjax = {
    getSurveyParams: async() => {
        return await ajax.get({
            url: SURVEY_API.GET,
            credentials: 'include',
            params: {
                'test_id': 1
            }
        });
    },

    addAnswers: async(id: number, body: BodyType) => {
        return await ajax.post({
            url: SURVEY_API.SEND,
            params: {
                'user_id': id,
            },
            body: {
                answers: body.answers
            },
            credentials: 'include',
        });
    },
};
