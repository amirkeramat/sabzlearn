import * as yup from "yup";
import { phoneNumberRegex } from "./regex";
const registerSchema = yup.object().shape({
  fullName: yup.string().required("Name is required").min(8).max(20),
  username: yup.string().required("username is required").min(8).max(30),
  email: yup.string().email().required("password is required"),
  phone: yup
    .string()
    .matches(phoneNumberRegex, "not a valid phone number")
    .required("phone number is required"),
  password: yup.string().min(8).max(20).required("password is required"),
  confirmPassword: yup
    .string()
    .min(8)
    .max(20)
    .oneOf([yup.ref("password"), null], "password not same")
    .required("confirm your password"),
});

const EditUserSchema = yup.object().shape({
  fullName: yup.string().required("Name is required").min(8).max(20),
  username: yup.string().required("username is required").min(8).max(30),
  email: yup.string().email().required("password is required"),
  phone: yup
    .string()
    .matches(phoneNumberRegex, "not a valid phone number")
    .required("phone number is required"),
});

const CourseSchema = yup.object().shape({
  courseName: yup.string().required("required").min(8),
  CourseDescription: yup.string().required("required").min(8),
  CourseCover: yup.string().email().required("required"),
  CourseLink: yup.string().required("required"),
  CoursePrice: yup.string().required("required"),
  CourseStatus: yup.string().required("required"),
  CourseCategory: yup.string().required("required"),
});
const CategorySchema = yup.object().shape({
  categoryName: yup.string().required("required").min(8),
});

const loginSchema = yup.object().shape({
  username: yup.string().required("username is required").min(8).max(30),
  password: yup.string().min(8).max(20).required("password is required"),
});

const commentSchema = yup.object().shape({
  comment: yup.string().required("باکس مورد نظر را خالی نگذارید"),
  score: yup.string().required("انتخاب امتیاز ضروری است"),
});

const searchSchema = yup.object().shape({
  searchValue: yup.string().required("مقداری را وارد نمایید"),
});

const contactSchema = yup.object().shape({
  fullName: yup.string().required("Name is required").min(8).max(20),
  email: yup.string().email().required("password is required"),
  phone: yup
    .string()
    .matches(phoneNumberRegex, "not a valid phone number")
    .required("phone number is required"),
  message: yup.string().required("باکس را خالی نگذارید").min(10),
});

const newsLetterSchema = yup.object().shape({
  email: yup
    .string()
    .required("ایمیل خود را وارد نمایید")
    .email("ایمیل صحیح نیست"),
});

export {
  registerSchema,
  loginSchema,
  commentSchema,
  searchSchema,
  contactSchema,
  newsLetterSchema,
  EditUserSchema,
  CourseSchema,
  CategorySchema,
};
