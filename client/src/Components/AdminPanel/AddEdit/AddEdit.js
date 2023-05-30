import { useState } from "react";
import React from "react";
import Add from "./Add";
import Edit from "./Edit";
import Button from "../../Form/Button/Button";
export default function AddEdit({ usersData ,getAllUser }) {
  const [activeBtn, setActiveBtn] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);


  const btnChangeHandler = (btnValue) => {
    setActiveBtn(btnValue);
    if (btnValue === "edit-btn") {
    } else {
      setShowEditInput(false);
    }
  };

  return (
    <>
      <div className='button-container m-4 d-flex justify-content-evenly'>
        <Button
          className={`add-btn ${activeBtn === "add-btn" && "active"}`}
          onClick={() => btnChangeHandler("add-btn")}>
          افزودن کاربر
        </Button>
        <Button
          className={`edit-btn ${activeBtn === "edit-btn" && "active"}`}
          onClick={() => btnChangeHandler("edit-btn")}>
          ویرایش کاربر
        </Button>
        {activeBtn !== "" && (
          <Button
            className={`close-btn ${activeBtn === "" && "active"}`}
            onClick={() => btnChangeHandler("")}>
            بستن
          </Button>
        )}
      </div>
      {activeBtn === "add-btn" && <Add getAllUser={getAllUser} />}
      {activeBtn === "edit-btn" && (
        <Edit
          showEditInput={showEditInput}
          setShowEditInput={setShowEditInput}
          usersData={usersData}
        />
      )}
    </>
  );
}
