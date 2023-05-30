import React from "react";
import { useForm } from "react-hook-form";
import { searchSchema } from "../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function SearchBox({ setData, allData,placeHolder }) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(searchSchema),
    mode: "onSubmit",
  });
  const onSubmit = (value) => {
    const newData = allData.filter((data) =>
      data.name.toLowerCase().includes(value.searchValue.toLowerCase())
    );
    setData(newData);
    value.searchValue = "";
    console.log(newData);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action='#'
      className='courses-top-bar__form'>
      <input
        element='input'
        type='text'
        className='courses-top-bar__input'
        placeholder={placeHolder}
        {...register("searchValue")}
      />
      <button type='submit' className='courses-top-bar__search-icon'>
        <i className='fas fa-search '></i>
      </button>
    </form>
  );
}
