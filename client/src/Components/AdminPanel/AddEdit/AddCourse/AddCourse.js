import React, { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { CourseSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddCourse({ getAllData }) {
  const [categoryDatas, setCategoryDatas] = useState([]);

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

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(CourseSchema),
    mode: "all",
  });

  const fromSubmitHandler = (data) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("name", data.courseName);
    formData.append("description", data.courseDescription);
    formData.append("cover", data.courseCover[0]);
    formData.append("shortName", data.courseLink);
    formData.append("price", data.coursePrice);
    formData.append("status", data.courseStatus);
    formData.append("categoryID", data.categoryID);
    fetch("http://localhost:4000/v1/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: formData,
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
          return res.json();
        }
      })
      .then((result) => {       
        swal({
          title: "دوره با موفقیت ساخته شد",
          icon: "success",
          button: "خروج",
        }).then(() => {
          getAllData();
           reset();
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
            type='file'
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
              checked
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
