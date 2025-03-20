import React from "react";

export const ListSelect = ({ optionsArray, onChange, defaultValue }) => {
  const options = optionsArray.map((o) => {
    return (
      <option key={o.text} value={o.value}>
        {o.text}
      </option>
    );
  });

  return (
    <select
      name="list"
      id="list"
      className=" border w-full max-w-[200px] p-2"
      value={defaultValue}
      onChange={onChange}
    >
      {options}
    </select>
  );
};
