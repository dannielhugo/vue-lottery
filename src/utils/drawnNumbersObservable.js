import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { randomNumber } from './randomHelpers';
import {
  INTERVAL,
  MIN_NUMBER,
  MAX_NUMBER,
  LOTTERY_NUMBERS,
} from './constants';

export default () => {
  const pickedNumbers = [];

  return interval(INTERVAL).pipe(
    map(() => {
      let numberOk = false;
      let newNumber;

      while (!numberOk) {
        newNumber = randomNumber(MIN_NUMBER, MAX_NUMBER);

        /**
         * Validação do número recém gerado
         */
        if (pickedNumbers.indexOf(newNumber) === -1) {
          pickedNumbers.push(newNumber);
          numberOk = true;
        }
      }

      return newNumber;
    }),
    take(LOTTERY_NUMBERS),
  );
};
