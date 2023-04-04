import Item from "./Item";
import { BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import "./Section.css";
import { useEffect, useState } from "react";
import INITIAL_SECTION_DETAILS from "../../../Constants/InitialSection";
import PopUp from "../../Modal/PopUp";

const Section = ({ type, data, changeHandler }) => {
  const [showDelete, setShowDelete] = useState("");
  const clickHandler = () => {
    const newItem = {
      id: uuidv4(),
      ...INITIAL_SECTION_DETAILS,
    };
    changeHandler(prev => [...prev, newItem]);
  };

  const editItemHandler = (id, item) => {
    const newItem = [...data];
    const index = newItem.findIndex(i => i.id === id);
    newItem[index] = item;
    changeHandler(newItem);
  };

  useEffect(() => {
    if (!data.length) clickHandler();
  }, []);

  return (
    <div className="section">
      <PopUp
        show={!!showDelete.length}
        onHide={() => setShowDelete("")}
        onSubmit={() =>
          changeHandler(data => data.filter(item => item.id !== showDelete))
        }
        message={`Are you sure you want to delete this ${type} field?`}
        title={"Delete"}
      />
      <div className="section-header">
        <div className="section-heading">{type}</div>
        <div className="add-button symbol-button " onClick={clickHandler}>
          <BiPlus />
        </div>
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
              deleteHandler={id => setShowDelete(id)}
              editHandler={editItemHandler}
              type={type}
              deleteDisable={data.length <= 1}
            />
          );
        })
      )}
    </div>
  );
};

export default Section;
