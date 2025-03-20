import React, { useEffect, useState } from "react";

export const SmallMediaErrorMessage = ({ error }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
    }
  }, [error]);

  return (
    <>
      {errorMessage ? (
        <div className=" w-full max-w-[1500px] min-h-[200px] mx-auto flex items-center justify-center">
          {errorMessage}
        </div>
      ) : null}
    </>
  );
};
