import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, children }) => {
  const cls = classNames('button', className, {});
  return <button className={cls}> {children} </button>;
};

export default Button;
