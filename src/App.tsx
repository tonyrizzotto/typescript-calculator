import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

import {
  numClickHander,
  equalsHandler,
  percentageHandler,
  btnValues,
} from './helpers';

const App = () => {
  const [calc, setCalc] = useState({
    sign: '',
    num: '0',
    prevNum: 0,
    result: '0',
  });
  console.log(calc);
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
                    : // detect percentage hit. Num is the % of the prevNum
                    btn === '%'
                    ? setCalc({
                        ...calc,
                        num: percentageHandler(calc.prevNum, calc.num),
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
