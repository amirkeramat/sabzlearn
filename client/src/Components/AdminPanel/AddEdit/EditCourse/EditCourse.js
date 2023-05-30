import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { CourseSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchBox from "../../../searchBox/SearchBox";
export default function EditCourse({
  usersData,
  showEditInput,
  setShowEditInput,
}) {
  const [editedCourseID, setEditedCourseID] = useState(null);
  const [searchedCourse, setSearchedCourse] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset: editReset,
  } = useForm({
    resolver: yupResolver(CourseSchema),
    mode: "all",
  });
  const editUserHandler = (data) => {
    console.log(data);
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    const editedData = {
      name: data.courseName,
      description: data.courseDescription,
      cover: data.courseCover,
      shortName: data.courseLink,
      price: data.coursePrice,
      status: data.courseStatus,
      categoryId: data.courseCategory,
    };
    fetch(`http://localhost:4000/v1/users/${editedCourseID}`, {
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
    setValue("courseName", data.name, { shouldValidate: true });
    setValue("courseDescription", data.description, {
      shouldValidate: true,
    });
    setValue("courseCover", data.cover, { shouldValidate: true });
    setValue("courseLink", data.shortName, { shouldValidate: true });
    setValue("coursePrice", data.price, { shouldValidate: true });
    setValue("courseStatus", data.status, {
      shouldValidate: true,
    });
    setValue("courseCategory", data.categoryID.title, {
      shouldValidate: true,
    });
  };
  const selectUserHandler = (event) => {
    console.log(event.target.value);
    let filteredData = usersData.filter(
      (userData) => userData.name === event.target.value
    );
    if (filteredData.length) {
      setEditedCourseID(filteredData[0]._id);
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
              setData={setSearchedCourse}
            />
            <p className='ms-2 me-2'>نتیجه جستجو:</p>

            {searchedCourse.length !== 0 ? (
              <ul className='ms-2 d-flex w-full justify-content-evenly search-list flex-wrap'>
                {searchedCourse.map((userData) => (
                  <li
                    onClick={() => {
                      setValueGenerator(userData);
                      setShowEditInput(true);
                      setSearchedCourse([]);
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
              <label className='input-title'>عنوان</label>
              <input
                type='text'
                className=''
                placeholder='نام دوره'
                {...register("courseName")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>

          <div className='col-6'>
            <div className='email input'>
              <label className='input-title'>عکس دوره</label>
              <input
                type='text'
                className=''
                placeholder='مسیر عکس دوره را وارد نمایید'
                {...register("courseCover")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='phone input'>
              <label className='input-title'>لینک دوره</label>
              <input
                type='text'
                className=''
                placeholder='لینک دوره را وارد نمایید'
                {...register("courseLink")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='password input'>
              <label className='input-title'>مبلغ دوره </label>
              <input
                type='text'
                className=''
                placeholder='مبلغ دوره را وارد نمایید'
                {...register("coursePrice")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='password input'>
              <label className='input-title'>وضعیت </label>
              <input
                type='text'
                className=''
                placeholder='در حال برگذاری یا تمام شده؟'
                {...register("courseStatus")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-6'>
            <div className='password input'>
              <label className='input-title'>دسته بندی </label>
              <select {...register("courseCategory")} name='' id=''></select>
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-12'>
            <div className='family input'>
              <label className='input-title'>توضیحات</label>
              <textarea
                type=''
                className='w-100'
                placeholder='توضیحات دوره'
                {...register("courseDescription")}
              />
              <span className='error-message text-danger'></span>
            </div>
          </div>
          <div className='col-12'>
            <div className='bottom-form'>
              <div className='submit-btn'>
                <input type='submit' value='افزودن' />
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
