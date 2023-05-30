import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { EditUserSchema } from "../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchBox from "../../searchBox/SearchBox";

export default function Edit({ usersData, showEditInput, setShowEditInput }) {
  const [editedUserID, setEditedUserID] = useState(null);
  const [searchedUser, setSearchedUser] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset: editReset,
  } = useForm({
    resolver: yupResolver(EditUserSchema),
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
      // password: data.password,
      // confirmPassword: data.confirmPassword,
    };
    fetch(`http://localhost:4000/v1/users/${editedUserID}`, {
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
          title: "کاربر با موفقیت ویرایش شد",
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
    setValue("fullName", data.name, { shouldValidate: true });
    setValue("email", data.email, { shouldValidate: true });
    setValue("username", data.username, { shouldValidate: true });
    setValue("phone", data.phone, { shouldValidate: true });
    setValue("password", data.password, { shouldValidate: true });
    setValue("confirmPassword", data.password, {
      shouldValidate: true,
    });
  };
  const selectUserHandler = (event) => {
    console.log(event.target.value);
    let filteredData = usersData.filter(
      (userData) => userData.name === event.target.value
    );
    if (filteredData.length) {
      setEditedUserID(filteredData[0]._id);
      setShowEditInput(true);
    }
    setValueGenerator(filteredData[0]);
  };

  return (
    <>
      <div className=''>
        <div className='m-4'>
          <label htmlFor='user-select'>انتخاب کاربر:</label>
          <select onChange={selectUserHandler} name='' id='user-select'>
            <option selected disabled value='کاربر را انخاب نمایید'>
              کاربر را انخاب نماید
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
              <label className='input-title'>نام و نام خانوادگی</label>
              <input
                type='text'
                className=''
                placeholder='لطفا نام و نام خانوادگی کاربر را وارد کنید...'
                {...register("fullName")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='family input'>
              <label className='input-title'>نام کاربری</label>
              <input
                type='text'
                className=''
                placeholder='لطفا نام کاربری را وارد کنید...'
                {...register("username")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='email input'>
              <label className='input-title'>ایمیل</label>
              <input
                type='text'
                className=''
                placeholder='لطفا ایمیل کاربر را وارد کنید...'
                {...register("email")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='phone input'>
              <label className='input-title'>شماره تلفن</label>
              <input
                type='text'
                className=''
                placeholder='لطفا شماره تلفن کاربر را وارد کنید...'
                {...register("phone")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          {/* <div className='col-6'>
                  <div className='password input'>
                    <label className='input-title'>رمز عبور</label>
                    <input
                      type='password'
                      className=''
                      placeholder='لطفا رمز عبور کاربر را وارد کنید...'
                      {...register("password")}
                    />
                    <span className='error-message text-danger'></span>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='password input'>
                    <label className='input-title'>تکرار رمز</label>
                    <input
                      type='password'
                      className=''
                      placeholder='تکرار رمز عبور'
                      {...register("confirmPassword")}
                    />
                    <span className='error-message text-danger'></span>
                  </div>
                </div> */}
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
