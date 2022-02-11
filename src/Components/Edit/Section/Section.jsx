import { Button } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

const Section = ({ type, data, changeHandler }) => {
  const clickHandler = () => {
    const newItem = {
      id: uuidv4(),
      name: "",
      degree: "",
      start: "",
      end: "",
    };
    changeHandler(prev => [...prev, newItem]);
  };

  const deleteHandler = id => {
    changeHandler(data => data.filter(item => item.id !== id));
  };

  const editItemHandler = (id, item) => {
    const newItem = [...data];
    const index = newItem.findIndex(i => i.id === id);
    newItem[index] = item;
    changeHandler(newItem);
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-heading">{type}</div>
        <Button variant="success" onClick={clickHandler}>
          <BiPlus />
        </Button>
      </div>

      {data.length === 0 ? (
        <div className="section-message">{`Add your ${type} to attract recruiters`}</div>
      ) : (
        data.map((item, index) => {
          return (
            <Item
              key={item.id}
              data={item}
              index={index}
              deleteHandler={deleteHandler}
              editHandler={editItemHandler}
              type={type}
            />
          );
        })
      )}
    </div>
  );
};

export default Section;
