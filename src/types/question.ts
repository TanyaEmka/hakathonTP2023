export interface AnswerProps {
    id: number
    title: string,
}

export interface QuestionProps {
    title: string,
    multiple: boolean,
    answers: Array<AnswerProps>
}

export const initData1: QuestionProps = {
    title: 'Вопрос1',
    multiple: true,
    answers: [
        {
            id: 1,
            title: 'ОК'
        },
        {
            id: 2,
            title: 'Нормально'
        },
        {
            id: 3,
            title: 'НЕ ОК'
        }
    ],
}