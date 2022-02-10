import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

const Section = ({ type, mode, data, changeHandler }) => {
  const clickHandler = () => {
    const newItem = {
      id: uuidv4(),
      name: "",
      degree: "",
      year: "",
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container className="section">
      <div className="section-header">
        <div className="section__heading">{type}</div>
        {mode === "edit" && (
          <Button variant="secondary" onClick={clickHandler}>
            <BiPlus />
          </Button>
        )}
      </div>

      {data.length === 0 ? (
        <div>
          {mode === "edit"
            ? `Add your ${type} to attract hirers`
            : `No ${type} added`}
        </div>
      ) : (
        data.map((item, index) => {
          return (
            <Item
              key={item.id}
              data={item}
              mode={mode}
              index={index}
              deleteHandler={deleteHandler}
              editHandler={editItemHandler}
              type={type}
            />
          );
        })
      )}
    </Container>
  );
};

export default Section;
