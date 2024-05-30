import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [value, setValue] = useState("");

  const handleClick = (e: React.MouseEvent) => {
    setValue((prev) => prev + (e.target as HTMLInputElement).value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleEquals = () => {
    setValue(eval(value));
  };

  return (
    <>
      <div>
        <input type="text" value={value} readOnly />
      </div>
      <div>
        <input type="button" value="+" onClick={handleClick} />
        <input type="button" value="-" onClick={handleClick} />
        <input type="button" value="*" onClick={handleClick} />
        <input type="button" value="/" onClick={handleClick} />
      </div>{" "}
      <div>
        <input type="button" value="7" onClick={handleClick} />
        <input type="button" value="8" onClick={handleClick} />
        <input type="button" value="9" onClick={handleClick} />
      </div>{" "}
      <div>
        <input type="button" value="4" onClick={handleClick} />
        <input type="button" value="5" onClick={handleClick} />
        <input type="button" value="6" onClick={handleClick} />
      </div>{" "}
      <div>
        <input type="button" value="1" onClick={handleClick} />
        <input type="button" value="2" onClick={handleClick} />
        <input type="button" value="3" onClick={handleClick} />
      </div>
      <div>
        <input type="button" value="" />
        <input type="button" value="0" onClick={handleClick} />
        <input type="button" value="," onClick={handleClick} />
        <input type="button" value="=" onClick={handleEquals} />
        <input type="button" value="C" onClick={handleClear} />
      </div>{" "}
    </>
  );
};

export default Calculator;
