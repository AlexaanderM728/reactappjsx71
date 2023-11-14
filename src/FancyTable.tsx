import React, { FC } from 'react';

const FancyTable: FC<{ n: number }> = ({ n }) => {
  const items = Array.from({ length: n }, (_, index) => index + 1);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default FancyTable;
