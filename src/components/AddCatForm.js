import React, { useState } from "react";

function AddCatForm() {
  const [newCat, setNewCat] = useState({ name: "", image: "" });

  const handleChangeName = (event) => {
    setNewCat((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleChangeImage = (event) => {
    setNewCat((prevState) => ({
      ...prevState,
      image: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/cats", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>This is the add cat form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChangeName} />
          </label>
        </div>
        <div>
          <label>
            Photo:
            <input type="text" name="image" onChange={handleChangeImage} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddCatForm;
