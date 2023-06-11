import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { CategorySchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddCategory({ getAllData }) {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(CategorySchema),
    mode: "all",
  });

  const fromSubmitHandler = (data) => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    const newCategory = {
      title: data.categoryName,
      name: data.categoryLink,
    };
    console.log(data);
    fetch("http://localhost:4000/v1/category", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
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
  };
  return (
    <form onSubmit={handleSubmit(fromSubmitHandler)} className='form'>
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
            <input type='submit' value='افزودن' />
          </div>
        </div>
      </div>
    </form>
  );
}
