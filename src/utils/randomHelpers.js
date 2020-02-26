/**
 * Imported from https://gitlab.com/rrgomide-react/react-megasena
 *
 * Gera um único número aleatório conforme
 * os critérios
 * @param {number} min Valor mínimo para a geração
 * @param {number} max Valor máximo para a geração
 */
export const randomNumber = (min, max) => Math.floor(Math.random() * max + min);

/**
 * Imported from https://gitlab.com/rrgomide-react/react-megasena
 *
 * Gera determinada quantidade de números aleatórios
 * conforme os critérios
 *
 * @param {number} min Valor mínimo para a geração
 * @param {number} max Valor máximo para a geração
 * @param {number} count Quantidade de números a serem gerados
 */
export const randomNumbers = (min, max, count) => {
  const numbers = [];

  for (let i = 0; i < count; i += 1) {
    const number = randomNumber(min, max);
    if (numbers.indexOf(number) === -1) numbers.push(number);
    else i -= 1;
  }

  return numbers.sort((a, b) => a > b);
};
