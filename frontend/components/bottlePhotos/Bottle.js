import Image from "next/image";
import React from 'react';

const Bottle = (props) => {
  return (
      <Image src={props.bottle}
             alt={props.bottle_name + " Jugsie bottle"}
             objectFit="contain"
             className={props.formatting}
             priority={true}
      />
  );
};

export default Bottle;

