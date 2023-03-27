"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ProductError = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default ProductError;
