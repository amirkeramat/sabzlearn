import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    fetch("http://localhost:4000/v1/category")
      .then((res) => {
        if (!res.ok) {
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setCategoryDatas(data);
      });
  };
  const [searchedCourse, setSearchedCourse] = useState([]);
  const [categoryDatas, setCategoryDatas] = useState([]);
  const [editedCourseID,SetEditedCourseID] = useState();
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(CourseSchema),
    mode: "all",
  });
  const editUserHandler = (data) => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    let EditedCategoryIDd = categoryDatas.find(
      (category) => category.title === data.categoryID
    )
    const editedData = {
      name: data.courseName,
      description: data.courseDescription,
      cover: data.courseCover,
      shortName: data.courseLink,
      price: data.coursePrice,
      status: data.courseStatus,
      categoryID: EditedCategoryIDd._id
    };


    fetch(`http://localhost:4000/v1/users/${editedCourseID}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorageData.token}` },
      body: JSON.stringify(editedData),
    })
      .then((res) => {
        if (!res.ok) {
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
    setValue("categoryID", data.categoryID.title, {
      shouldValidate: true,
    });
    setValue("category", data.categoryID.title, {
      shouldValidate: true,
    });
  };
  const selectUserHandler = (event) => {
    let filteredData = usersData.filter(
      (userData) => userData.name === event.target.value
    );
    if (filteredData.length) {
      SetEditedCourseID(filteredData[0]._id);
      setShowEditInput(true);
    }
    setValueGenerator(filteredData[0]);
  };

  return (
    <>
      <div className=''>
        <div className='m-4'>
          <label htmlFor='user-select'>انتخاب دوره:</label>
          <select onChange={selectUserHandler} name='' id='user-select'>
            <option selected disabled>
              دوره مورد نظر را انخاب نماید
            </option>
            {usersData.map((userData) => (
              <option key={userData._id}>{userData.name}</option>
            ))}
          </select>
        </div>
        <div className='m-4'>
          <div className='d-flex align-items-center w-full'>
            <SearchBox
              placeHolder={"جست و جوی دوره"}
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
              <label className='input-title'>وضعیت دوره</label>
              <div className='d-flex justify-content-start'>
                <label htmlFor='start-status'>در حال برگذاری</label>
                <input
                  className=' w-auto ms-5'
                  type='radio'
                  id='start-status'
                  name='status'
                  value='start'
                  {...register("courseStatus")}
                />
                <label htmlFor='presell-status'>پیش فروش</label>
                <input
                  className=' w-auto'
                  type='radio'
                  name='status'
                  id='presell-status'
                  value='presell'
                  {...register("courseStatus")}
                />
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='password input'>
              <label className='input-title'>تغییر دسته بندی</label>
              <select {...register("categoryID")}>
                <>
                  {categoryDatas.map((categoryData) => (
                    <option key={categoryData._id} value={categoryData.title}>
                      {categoryData.title}
                    </option>
                  ))}
                </>
              </select>
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
                <input type='submit' value='ویرایش' />
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
