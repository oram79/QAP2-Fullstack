const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe('getQuestion', () => {
    it('should generate a question with a valid answer', () => {
      const question = generateQuestion();
      expect(typeof question.question).toBe('string');
      expect(typeof question.answer).toBe('number');
    });
  });

  describe('isCorrectAnswer', () => {
    it('should return true for a correct answer', () => {
      const question = { question: '2 + 2', answer: 4 };
      expect(checkAnswer(question, 4)).toBe(true);
    });
  
    it('should return false for an incorrect answer', () => {
      const question = { question: '2 + 2', answer: 4 };
      expect(checkAnswer(question, 5)).toBe(false);
    });
  });