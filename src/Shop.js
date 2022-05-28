import React, { useState } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState([]);
  const [fill, setFill] = useState(true);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(name, desc);
    if (name === "" || desc === "") {
      setFill(false);
    } else {
      setFill(true);
      setItems([...items, { id: items.length, name: name, desc: desc }]);
      setName("");
      setDesc("");
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            id="name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="desc">Description: </label>
          <input
            onChange={(event) => setDesc(event.target.value)}
            value={desc}
            id="desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {fill ? "" : "Заполнены не все поля"}
          </div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        <p className="ui-title">
          {items.length === 0 ? "Добавьте первый товар" : ""}
        </p>
      </div>

      <ul className="ui-list">
        {items.map((item, index) => (
          <li className="ui-item-list" key={index}>
            <Item info={item} />
            <button
              onClick={() =>
                setItems([...items.filter((i) => i.name !== item.name)])
              }
              className="item-button"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}