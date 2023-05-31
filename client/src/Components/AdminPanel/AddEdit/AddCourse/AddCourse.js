import React, { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { CourseSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddCourse({ getAllUser }) {
  const [categoryDatas, setCategoryDatas] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    fetch("http://localhost:4000/v1/category")
      .then((res) => {
        if (!res.ok) {
          console.log(res.ok());
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCategoryDatas(data);
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CourseSchema),
    mode: "all",
  });

  const fromSubmitHandler = (data) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const newCourse = {
      name: data.courseName,
      description: data.courseDescription,
      cover: data.courseCover,
      shortName: data.courseLink,
      price: data.coursePrice,
      status: data.courseStatus,
      categoryID: data.categoryID,
    };
    console.log(data);
    fetch("http://localhost:4000/v1/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newCourse),
    })
      .then((res) => {
        if (!res.ok) {
          swal({
            title: "مشکلی پیش آمده دوباره تکرار کنید",
            icon: "error",
            button: "خروج",
          });
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        getAllUser();
        reset();
        swal({
          title: "کاربر با موفقیت ساخته شد",
          icon: "success",
          button: "خروج",
        });
      })
      .catch((err) => {});
  };

  return (
    <form onSubmit={handleSubmit(fromSubmitHandler)} className='form'>
      <div className='col-6'>
        <div className='name input'>
          <label className='input-title'> عنوان دوره</label>
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
          <label className='input-title d-block'>دسته بندی </label>
          <select {...register("categoryID")}>
            <>
              <option selected disabled value=''>
                یک دسته بندی انتخاب کنید
              </option>
              {categoryDatas.map((categoryData) => (
                <option key={categoryData._id} value={categoryData._id}>
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
            <input type='submit' value='افزودن' />
          </div>
        </div>
      </div>
    </form>
  );
}
