import React, { FC } from 'react';

const Multiple: FC<{ name: string; number: number }> = ({ name, number }) => {
  const items = Array.from({ length: number }, (_, index) => index + 1);

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Multiple;
