import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

import { numClickHander, btnValues } from './helpers';

const App = () => {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    result: 0,
  });
  console.log(calc);
  return (
    <div>
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.result} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={(e) => {
                  btn === 'C'
                    ? setCalc({ ...calc, num: 0, sign: '' })
                    : btn === '+' || btn === '-' || btn === 'X' || btn === '/'
                    ? setCalc({ ...calc, sign: btn })
                    : setCalc({
                        ...calc,
                        num:
                          calc.num !== 0
                            ? calc.num + numClickHander(e, calc.num)
                            : numClickHander(e, calc.num),
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
