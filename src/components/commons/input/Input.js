import React from "react";

const Input = ({ classname, placeholder }) => {
  return (
    <div>
      <input className={classname} placeholder={placeholder} />
    </div>
  );
};

export default Input;
