import React from 'react';
import classNames from 'classnames';

const Button = ({ type, children }) => {
  const cls = classNames({
    button: true,
    'button--outline': type,
  });
  return <button className={cls}> {children} </button>;
};

export default Button;
