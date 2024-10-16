/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */

function getQuestion() {
    const operations = ['+', '-', '*', '/'];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operation = operations[Math.floor(Math.random() * operations.length)];

    const question = `${num1} ${operation} ${num2}`;

    const answer = eval(question).toFixed(2); // Use toFixed for division precision

    return { question, answer: parseFloat(answer) };
  }

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(userAnswer, correctAnswer) {
    return parseInt(userAnswer) === correctAnswer;
}

module.exports = {
    getQuestion,
    isCorrectAnswer
}