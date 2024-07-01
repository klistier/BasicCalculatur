import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleClick = (e: React.MouseEvent) => {
    setValue(value + (e.target as HTMLInputElement).value);
  };

  const handleEquals = () => {
    setValue(eval(value));
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <div className="container">
        <div>
          <input type="text" value={value} readOnly className="display"></input>
        </div>
        <div className="row-container">
          <input
            type="button"
            value="C"
            className="btn "
            onClick={handleClear}
          />
          <input
            type="button"
            value="/"
            className="btn blue"
            onClick={handleClick}
          />
          <input
            type="button"
            value="*"
            className="btn blue"
            onClick={handleClick}
          />
          <input type="button" value="DEL" className="btn" />
        </div>{" "}
        <div className="row-container">
          <input
            type="button"
            value="7"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="8"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="9"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="-"
            className="btn blue"
            onClick={handleClick}
          />
        </div>{" "}
        <div className="row-container">
          <input
            type="button"
            value="4"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="5"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="6"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="-"
            className="btn blue"
            onClick={handleClick}
          />
        </div>{" "}
        <div className="row-container">
          <input
            type="button"
            value="1"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="2"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="3"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="+"
            className="btn blue"
            onClick={handleClick}
          />
        </div>{" "}
        <div className="last-row-container">
          <input type="button" value="*" className="btn" />
          <input
            type="button"
            value="0"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value=","
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="="
            className="large white highlight"
            onClick={handleEquals}
          />
        </div>
        <div className="row-container">
          <input
            type="button"
            value="1"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="2"
            className="btn"
            onClick={handleClick}
          />
          <input
            type="button"
            value="3"
            className="btn"
            onClick={handleClick}
          />
        </div>{" "}
      </div>
    </>
  );
};

export default Calculator;
