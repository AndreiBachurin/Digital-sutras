import React from "react";
import Item from "./Item";

export default function ItemsList(props) {

    // function handleDelClick() {
    //     setItems([...props.items.filter((i) => i.name !== item.name)]);
    //   }

    return (
    <ul className="ui-list">
        {props.items.map((item, index) => (
          <li className="ui-item-list" key={index}>
            <Item info={item} />
            <button name={item.name} onClick={props.onDelClick}
              className="item-button">
              Удалить
            </button>
          </li>
        ))}
      </ul>
    )  
}
