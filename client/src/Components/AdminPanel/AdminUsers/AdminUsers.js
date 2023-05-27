import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Pagination from "../../Pgination/Pagination";
import Button from "../../Form/Button/Button";
import swal from "sweetalert";
export default function AdminUsers() {
  const [showUser, setShowUser] = useState([]);
  const [orderedUsers, setOrderedUsers] = useState([]);
  const [usersData, serUsersData] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
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
      .then((data) => {
        serUsersData(data);
        setOrderedUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUserHandler = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از حذف کاریر اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/v1/users/${userID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("کاربر مورد نظر با موفقیت حذف گردید", {
              icon: "success",
              buttons: "خروج",
            });
            getAllUser();
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("حذف لغو شد !", {
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };
  const banUserHandler = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از بن کاریر اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willBan) => {
      if (willBan) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("کاربر مورد نظر با موفقیت بن گردید", {
              icon: "success",
              buttons: "خروج",
            });
            fetch(`http://localhost:4000/v1/users/${userID}`, {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorageData.token}`,
              },
            });
            getAllUser();
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("بن کاربر لفو شد!", {
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };
  return (
    <>
      <DataTable title='کاربران'>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              showUser.map((userData, index) => (
                <tr key={userData._id}>
                  <td>{index + 1}</td>
                  <td>{userData.name}</td>
                  <td>{userData.phone}</td>
                  <td>{userData.email}</td>
                  <td>
                    <Button type='button' className='btn btn-primary edit-btn'>
                      ویرایش
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteUserHandler(userData._id)}
                      type='button'
                      className='btn btn-danger delete-btn'>
                      حذف
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => banUserHandler(userData._id)}
                      type='button'
                      className='btn btn-danger delete-btn'>
                      بن
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </DataTable>
      <Pagination
        items={orderedUsers}
        itemCount={5}
        pathName={`/p-admin/users`}
        setShowCourse={setShowUser}
      />
    </>
  );
}
