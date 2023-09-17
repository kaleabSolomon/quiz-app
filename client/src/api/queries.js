const allQuizzes = `
    query allQuizTypes {
        quiz_types {
            id
            name
            img
            quiz_questions {
              id
            }
          }
    }
`;

const getQuizzesAndChoices = `
query quizAndChoices($quizTypeId: uuid!) {
  quiz_types(where: {id: {_eq: $quizTypeId}}) {
    id
    quiz_questions {
      id
      question
      quiz_choices {
        id
        label
        choice
        isCorrect
      }
    }
  }
}

`;
export default { allQuizzes, getQuizzesAndChoices };
