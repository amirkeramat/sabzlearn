import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Button from "../../Form/Button/Button";
import AddEdit from "../AddEdit/AddEdit";
import swal from "sweetalert";
export default function AdminCategory() {
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

  const deleteCategoryHandler = (courseID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از حذف دسته بندی اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/v1/category/${courseID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("دسته بندی مورد نظر با موفقیت حذف گردید", {
              icon: "success",
              buttons: "خروج",
            }).then(() => {
              getCategory();
            });
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("حذف لغو شد !", {
          icon: "warning",
          buttons: "خروج",
        });
      }
    });
  };
  return (
    <>
      <div className='home-content-edit'>
        <AddEdit
          kind='category'
          getAllData={getCategory}
          usersData={categoryDatas}
        />
      </div>

      <DataTable title={"دسته بندی"} count={categoryDatas.length}>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {categoryDatas && (
              <>
                {categoryDatas.map((categoryData, index) => (
                  <tr key={categoryData._id}>
                    <td>{index + 1}</td>
                    <td>{categoryData.title}</td>
                    <td>
                      <Button
                        onClick={() => deleteCategoryHandler(categoryData._id)}
                        className='btn btn-danger'>
                        حذف
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}
