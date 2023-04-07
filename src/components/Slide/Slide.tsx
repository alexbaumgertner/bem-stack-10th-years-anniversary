import React from 'react';

const Slide = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={'slide'}>
      {children}
    </section>
  );
};

export { Slide };
