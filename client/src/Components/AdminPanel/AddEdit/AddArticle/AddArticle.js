import React, { useState, useEffect } from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { ArticleSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddArticle({ getAllData }) {
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
    resolver: yupResolver(ArticleSchema),
    mode: "all",
  });
  const sendArticle = (data, url, msg) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", data.articleName);
    formData.append("description", data.articleDescription);
    formData.append("cover", data.articleCover[0]);
    formData.append("shortName", data.articleLink);
    formData.append("body", data.articleBody);
    formData.append("categoryID", data.categoryID);
    fetch(url, {
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
          title: msg,
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
  const saveArticleToDraft = (data) => {
    let url = "http://localhost:4000/v1/articles/draft";
    let msg = "مقاله  با موفقیت ذخیره شد";
    sendArticle(data, url, msg);
  };
  const fromSubmitHandler = (data) => {
    let url = "http://localhost:4000/v1/articles";
    let msg = "مقاله  با موفقیت به سایت اضافه شد";
    sendArticle(data, url, msg);
  };
  return (
    <form onSubmit={handleSubmit(fromSubmitHandler)} className='form'>
      <div className='col-6'>
        <div className='name input'>
          <label className='input-title'> عنوان مقاله</label>
          <input
            type='text'
            className=''
            placeholder='نام مقاله'
            {...register("articleName")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='email input'>
          <label className='input-title'>عکس مقاله</label>
          <input
            type='file'
            className=''
            placeholder='مسیر عکس مقاله را وارد نمایید'
            {...register("articleCover")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='phone input'>
          <label className='input-title'>لینک مقاله</label>
          <input
            type='text'
            className=''
            placeholder='لینک مقاله را وارد نمایید'
            {...register("articleLink")}
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
            placeholder='توضیحات مقاله'
            {...register("articleDescription")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-12'>
        <div className='family input'>
          <label className='input-title'>متن مقاله</label>
          <textarea
            type=''
            className='w-100'
            placeholder='متن مقاله'
            {...register("articleBody")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-12'>
        <div className='bottom-form'>
          <div className='submit-btn'>
            <input name='send' type='submit' value='افزودن مقاله' />
            <input
              onClick={handleSubmit(saveArticleToDraft)}
              type='button'
              name='saveDraft'
              value='ذخیره مقاله'
              className="me-5"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
