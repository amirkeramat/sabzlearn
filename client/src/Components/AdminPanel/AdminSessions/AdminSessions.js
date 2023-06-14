import React, { useEffect, useState } from "react";
import AddSession from "../AddEdit/AddSession/AddSession";
import AddEdit from "../AddEdit/AddEdit";
import DataTable from "../DataTable/DataTable";
import Button from "../../Form/Button/Button";
import swal from "sweetalert";
export default function AdminSessions() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:4000/v1/courses/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  };
  const deleteHandler = (sessionID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از حذف جلسه اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/v1/courses/sessions/${sessionID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("جلسه مورد نظر با موفقیت حذف گردید", {
              icon: "success",
              buttons: "خروج",
            }).then(() => {
              getData();
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
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };
  return (
    <div>
      <div className='home-content-edit'>
        <AddEdit kind='session' getAllData={getData} />
      </div>
      <DataTable title={"تمامی جلسات"} count={sessions.length}>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>دوره</th>
              <th>مبلغ</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length && (
              <>
                {sessions.map((session, index) => (
                  <tr key={session._id}>
                    <td>{index + 1}</td>
                    <td>{session.title}</td>
                    <td>{session.course.name}</td>
                    <td>{session.free === 0 ? "رایگان" : "پولی"}</td>
                    <td>
                      <Button
                        onClick={() => deleteHandler(session._id)}
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
    </div>
  );
}
