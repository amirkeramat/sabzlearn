import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
export default function AddSession({ getAllData }) {
  const [allCourses, setAllCourses] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => {
        setAllCourses(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formSubmit = (data) => {
    const formData = new FormData();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    if (data.courseID !== -1) {
      formData.append("title", data.title);
      formData.append("time", Number(data.time));
      formData.append("free", data.status);
      formData.append("video", data.video[0]);
      fetch(`http://localhost:4000/v1/courses/${data.courseID}/sessions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: formData,
      })
        .then((res) => {
          if (!res.ok) {
            swal({
              title: "مشکلی پیش آمده دوباره سعی کنید",
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
          reset();
          swal({
            title: "دسته بندی جدید با موفقیت اضافه شد",
            icon: "success",
            button: "خروج",
          }).then(() => {
            getAllData();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className='home-content-edit'>
      <form action='' className='form' onSubmit={handleSubmit(formSubmit)}>
        <div className=' col-6'>
          <div className='name input'>
            <label className='input-title'>عنوان جلسه</label>
            <input
              type='text'
              className=''
              placeholder='عنوان جلسه را وارد نمایید'
              {...register("title")}
            />
            <span className='error-message text-danger'></span>
          </div>
        </div>
        <div className='col-6'>
          <div className='name input'>
            <label className='input-title'>ویدیو جلسه</label>
            <input
              type='file'
              className=''
              placeholder='لینک دسته بندی را وارد نمایید'
              {...register("video")}
            />
            <span className='error-message text-danger'></span>
          </div>
        </div>
        <div className='col-6'>
          <div className='name input'>
            <label className='input-title'>مدت زمان ویدیو </label>
            <input
              type='text'
              className=''
              placeholder='  مدت زمان ویدیو را وارد نماید'
              {...register("time")}
            />
            <p className='text-danger d-flex align-items-center'>
              مانند نمونه وارد نمایید: 12:34
            </p>
            <span className='error-message text-danger'></span>
          </div>
        </div>
        <div className='col-6'>
          <div className='name input d-flex flex-column'>
            <label className='input-title'>دوره </label>
            <select name='' id='' {...register("courseID")}>
              <>
                <option selected disabled value={-1}>
                  نام دوره را انتخاب نمایید
                </option>
                {allCourses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.name}
                  </option>
                ))}
              </>
            </select>
            <span className='error-message text-danger'></span>
          </div>
        </div>
        <div className='col-6'>
          <div className='name input d-flex flex-column'>
            <label className='input-title'>نوع ویدیو دوره</label>
            <div className='d-flex justify-content-evenly'>
              <label htmlFor='' className='d-flex align-items-0enter'>
                رایگان
                <input
                  type='radio'
                  className='me-2'
                  value={1}
                  name='status'
                  id=''
                  {...register("status")}
                />
              </label>
              <label htmlFor='' className='d-flex'>
                پولی
                <input
                  type='radio'
                  className='me-2'
                  value={0}
                  name='status'
                  id=''
                  {...register("status")}
                />
              </label>
            </div>

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
    </div>
  );
}
