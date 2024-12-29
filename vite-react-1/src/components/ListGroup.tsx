import { useState } from "react";

interface ListGroupProps {
  heading: string;
  listItems: string[];
  onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ heading, listItems, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {listItems.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
