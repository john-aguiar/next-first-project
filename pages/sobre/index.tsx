import { ReactNode } from 'react';

interface SobreProps {
  children: ReactNode;
}

function Sobre({ children }: SobreProps) {
  return (
    <>
      <h1>Sobre</h1>
      {children}
      
      <hr/>

    </>
  );
}

export default Sobre;
