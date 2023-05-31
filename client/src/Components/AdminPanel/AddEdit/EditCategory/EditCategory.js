import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { CategorySchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchBox from "../../../searchBox/SearchBox";
export default function EditCategory({
  usersData,
  showEditInput,
  setShowEditInput,
}) {
  const [editedCategoryID, setEditedCategoryID] = useState(null);
  const [searchedUser, setSearchedUser] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset: editReset,
  } = useForm({
    resolver: yupResolver(CategorySchema),
    mode: "all",
  });
  const editUserHandler = (data) => {
    console.log(data);
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    const editedData = {
      name: data.fullName,
      username: data.username,
      email: data.email,
      phone: data.phone,
    };
    fetch(`http://localhost:4000/v1/users/${editedCategoryID}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorageData.token}` },
      body: JSON.stringify(editedData),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((response) => {
        swal({
          title: "دسته بندی با موفقیت ویرایش شد",
          icon: "success",
          button: "خروج",
        });
        editReset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setValueGenerator = (data) => {
    setValue("categoryName", data.title, { shouldValidate: true });
    setValue("categoryLink", data.name, { shouldValidate: true });
   
  };
  const selectUserHandler = (event) => {
    console.log(event.target.value);
    let filteredData = usersData.filter(
      (userData) => userData.name === event.target.value
    );
    if (filteredData.length) {
      setEditedCategoryID(filteredData[0]._id);
      setShowEditInput(true);
    }
    setValueGenerator(filteredData[0]);
  };

  return (
    <>
      <div className=''>
        <div className='m-4'>
          <label htmlFor='user-select'>انتخاب دسته بندی:</label>
          <select onChange={selectUserHandler} name='' id='user-select'>
            <option selected disabled value='کاربر را انخاب نمایید'>
              دسته بندی را انتخاب نمایید
            </option>
            {usersData.map((userData) => (
              <option key={userData._id}>{userData.name}</option>
            ))}
          </select>
        </div>
        <div className='m-4'>
          <div className='d-flex align-items-center w-full'>
            <SearchBox
              placeHolder={"جست جوی کاربر"}
              allData={usersData}
              setData={setSearchedUser}
            />
            <p className='ms-2 me-2'>نتیجه جستجو:</p>

            {searchedUser.length !== 0 ? (
              <ul className='ms-2 d-flex w-full justify-content-evenly search-list flex-wrap'>
                {searchedUser.map((userData) => (
                  <li
                    onClick={() => {
                      setValueGenerator(userData);
                      setShowEditInput(true);
                      setSearchedUser([]);
                    }}
                    className='ms-2 bg-light p-2'>
                    {userData.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      {showEditInput ? (
        <form onSubmit={handleSubmit(editUserHandler)} className='form'>
          <div className='col-6'>
            <div className='name input'>
              <label className='input-title'>عنوان دسته بندی</label>
              <input
                type='text'
                className=''
                placeholder='عنوان دسته بندی را وارد نمایید'
                {...register("categoryName")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='name input'>
              <label className='input-title'>لینک دسته بندی</label>
              <input
                type='text'
                className=''
                placeholder='لینک دسته بندی را وارد نمایید'
                {...register("categoryLink")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-12'>
            <div className='bottom-form'>
              <div className='submit-btn'>
                <input type='submit' value='ویرایش' />
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
