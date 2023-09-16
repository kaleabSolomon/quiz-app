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

export default allQuizzes;
