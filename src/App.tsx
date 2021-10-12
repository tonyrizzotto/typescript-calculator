import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

import {
  numClickHander,
  equalsHandler,
  percentageHandler,
  decimalHandler,
  btnValues,
} from './helpers';

const App = () => {
  const [calc, setCalc] = useState({
    sign: '',
    num: '0',
    prevNum: 0,
    result: '0',
  });
  useEffect(() => {
    if (calc.num.length >= 11) {
      alert('Easy big fella, thems big numbers!');
      setCalc({ ...calc, num: calc.num.substring(0, calc.num.length - 1) });
    }
  }, [calc]);
  //console.log(calc);
  return (
    <div>
      <Wrapper>
        <Screen value={calc.num === '0' ? calc.result : calc.num} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={(e) => {
                  e.preventDefault();
                  btn === 'C'
                    ? setCalc({
                        ...calc,
                        num: '0',
                        prevNum: 0,
                        sign: '',
                        result: '0',
                      })
                    : // Detect a method hit
                    btn === '+' || btn === '-' || btn === 'X' || btn === '/'
                    ? setCalc({
                        ...calc,
                        prevNum:
                          calc.result !== '0'
                            ? Number(calc.result)
                            : Number(calc.num),
                        sign: btn,
                        num: '0',
                      })
                    : // detect if a decimal should be added
                    btn === '.'
                    ? setCalc({ ...calc, num: decimalHandler(calc.num) })
                    : // detect percentage hit. Num is the % of the prevNum
                    btn === '%'
                    ? setCalc({
                        ...calc,
                        num: percentageHandler(calc.prevNum, calc.num),
                      })
                    : // detect inverted number
                    btn === '+-'
                    ? setCalc({
                        ...calc,
                        num: calc.num
                          ? (Number(calc.num) * -1).toString()
                          : '0',
                      })
                    : // detect if equals was hit
                    btn === '='
                    ? setCalc({
                        ...calc,
                        result: equalsHandler(
                          calc.prevNum,
                          // num is always the 2nd number
                          calc.num,
                          calc.sign
                        ),
                        num: '0',
                      })
                    : // Otherwise set the display to the proper number
                      setCalc({
                        ...calc,
                        num:
                          calc.num !== '0'
                            ? calc.num +
                              numClickHander(e.target.innerHTML).toString()
                            : numClickHander(e.target.innerHTML).toString(),
                      });
                }}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
};

export default App;
