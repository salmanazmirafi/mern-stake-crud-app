import React, { useState } from "react";

function Form() {
  const [value, setvalue] = useState();

  const onsuBmit = () => {
    alert(value);
  };
  const changeEvent = (e) => {
    const valu = e.target.value;
    setvalue(valu);
  };

  return (
    <div>
      <form className="form" onSubmit={onsuBmit}>
        <input
          className="input"
          placeholder="Enter new todo"
          type="text"
          onChange={changeEvent}
        />
      </form>
    </div>
  );
}

export default Form;
