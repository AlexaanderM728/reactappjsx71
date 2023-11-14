import React, { FC } from 'react';

const JSXRules: FC<{ text: string }> = ({ text }) => {
  return <blockquote>{text}</blockquote>;
};

export default JSXRules;
