import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Button from "../../Form/Button/Button";
import AddEdit from "../AddEdit/AddEdit";
export default function AdminCourses() {
  const [coursesData, setCoursesData] = useState([]);
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
        console.log(data);
        setCoursesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='home-content-edit'>
        <AddEdit kind='course' getAllUser={getData} usersData={coursesData} />
      </div>
      <DataTable title={"دوره ها"} count={coursesData.length}>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>مدرس</th>
              <th>دسته بندی</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((courseData, index) => (
              <tr key={courseData._id}>
                <td>{index + 1}</td>
                <td>{courseData.name}</td>
                <td>
                  {courseData.price === 0
                    ? "رایگان"
                    : courseData.price.toLocaleString()}
                </td>
                <td>
                  {courseData.isComplete === "0"
                    ? "در حال برگذاری"
                    : "تکمیل شده"}
                </td>
                <td>
                  <Button
                    className='btn btn-success'
                    to={`/course-info/${courseData.shortName}`}>
                    مشاهده
                  </Button>
                </td>
                <td>{courseData.creator}</td>
                <td>{courseData.categoryID.title}</td>
                <td>
                  <Button className='btn btn-danger'>حذف</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}
