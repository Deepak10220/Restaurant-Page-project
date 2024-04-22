import React from 'react';
import './Button.css'; 

export const Button = (props) => {
  const {fontColor,backgroundColor,borderRadius,padding,fontSize,children} = props;

  return (
    <button className="button" style={{ color: fontColor, backgroundColor: backgroundColor ,borderRadius:borderRadius,padding:padding,fontSize:fontSize}}>
      {children}
    </button>
  );
};