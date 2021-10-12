import React from 'react';
import '../styles/Screen.css';

const Screen = ({ value }: any) => {
  // // get the text container to be controlled
  // const display = document.getElementById('screen-display');

  // //convert parent container width to a number
  // const parentWidth: number = Number(display?.parentElement?.clientWidth) - 10;
  // // the current size of the text
  // const textWidth = display?.clientWidth;

  // // if the text width intrudes on the parentWidth(minus padding) reduce the font size to fit the container
  // if (textWidth! >= parentWidth) {
  //   // get the fontSize
  //   const el = window.getComputedStyle(display!);
  //   let fontSize: number = Number(
  //     el.getPropertyValue('font-size').split('px')[0]
  //   );
  //   let newFontSize = fontSize! - fontSize! * 0.17;
  //   console.log(newFontSize);
  //   display!.style.fontSize = `${newFontSize}px`;
  // } else {
  //   display!.style.fontSize = '50px';
  // }
  return (
    <div className="screen">
      <div id="screen-display">{value}</div>
    </div>
  );
};

export default Screen;
