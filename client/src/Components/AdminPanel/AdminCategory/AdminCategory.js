import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Button from "../../Form/Button/Button";
import AddEdit from "../AddEdit/AddEdit";
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
  return (
    <>
      <div className='home-content-edit'>
        <AddEdit
          kind='category'
          getAllUser={getCategory}
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
                      <Button className='btn btn-danger'>حذف</Button>
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
