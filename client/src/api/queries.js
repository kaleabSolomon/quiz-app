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
    query quizAndChoices($subjectId:ID!){
      quiz_types(id: $subjectId){
        name
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
