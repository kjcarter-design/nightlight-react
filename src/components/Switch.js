import React, { useEffect, useState } from 'react';
import Light from './Light';

export default function Switch() {
  const [status, setStatus] = useState(false)
  
  useEffect(() => {
    console.log(status)
},[status])

  return (
    <>
    <button onClick={() => setStatus(!status)}>Toggle</button>
    <Light status={status} />
    </>
  );
}
