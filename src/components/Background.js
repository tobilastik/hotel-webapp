import React from 'react';

export default function Background({children, background}) {
  return (
    <header className={background}>
      {children}
    </header>
  );
}

Background.defaultProps = {
  background: 'defaultHero',
};
