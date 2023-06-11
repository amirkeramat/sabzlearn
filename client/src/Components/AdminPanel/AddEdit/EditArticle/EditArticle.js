import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { ArticleSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchBox from "../../../searchBox/SearchBox";
export default function EditArticle({
  usersData,
  showEditInput,
  setShowEditInput,
  getAllData,
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
        console.log(data);
        setCategoryDatas(data);
      });
  };
  const [searchedArticle, setSearchedArticle] = useState([]);
  const [categoryDatas, setCategoryDatas] = useState([]);
  const [editedArticleID, setEditedArticleID] = useState();
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(ArticleSchema),
    mode: "all",
  });
  const editHandler = (data) => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    let EditedCategoryID = categoryDatas.find(
      (category) => category.title === data.categoryID
      );
      let formData = new FormData();
      formData.append("title", data.articleName);
      formData.append("description", data.articleDescription);
      formData.append("cover", data.articleCover[0]);
      formData.append("shortName", data.articleLink);
      formData.append("body", data.articleBody);
      formData.append("categoryID", EditedCategoryID._id);

    fetch(`http://localhost:4000/v1/article/${editedArticleID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
        "Content-Type": "application/json",
      },
      body:formData,
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
          title: "دوره مورد نظر با موفقیت ویرایش شد",
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

  const setValueGenerator = (data) => {
    setValue("articleName", data.title, { shouldValidate: true });
    setValue("articleDescription", data.description, {
      shouldValidate: true,
    });
    setValue("articleCover", data.cover, { shouldValidate: true });
    setValue("articleLink", data.shortName, { shouldValidate: true });
    setValue("articleBody", data.body, {
      shouldValidate: true,
    });
    setValue(
      "categoryID",
      categoryDatas.find((categoryData) => categoryData._id === data.categoryID)
        .title,
      {
        shouldValidate: true,
      }
    );
    setValue("category", data.categoryID.title, {
      shouldValidate: true,
    });
  };
  const selectUserHandler = (event) => {
    let filteredData = usersData.filter(
      (userData) => userData.title === event.target.value
    );
    if (filteredData.length) {
      setEditedArticleID(filteredData[0]._id);
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
              <option key={userData._id}>{userData.title}</option>
            ))}
          </select>
        </div>
        <div className='m-4'>
          <div className='d-flex align-items-center w-full'>
            <SearchBox
              placeHolder={"جست و جوی دوره"}
              allData={usersData}
              setData={setSearchedArticle}
            />
            <p className='ms-2 me-2'>نتیجه جستجو:</p>

            {searchedArticle.length !== 0 ? (
              <ul className='ms-2 d-flex w-full justify-content-evenly search-list flex-wrap'>
                {searchedArticle.map((userData) => (
                  <li
                    onClick={() => {
                      setValueGenerator(userData);
                      setShowEditInput(true);
                      setSearchedArticle([]);
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
        <form onSubmit={handleSubmit(editHandler)} className='form'>
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
                    <option
                      key={categoryData._id}
                      value={categoryData.categoryID}>
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
                <input name='send' type='submit' value='ویرایش' />
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
