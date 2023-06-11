import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Pagination from "../../Pgination/Pagination";
import Button from "../../Form/Button/Button";
import AddEdit from "../AddEdit/AddEdit";
import swal from "sweetalert";
export default function AdminArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [orderedArticles, setOrderedArticles] = useState([]);
  const [showArticles, setShowArticles] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost:4000/v1/articles", {
      headers: { Authorization: `Bearer ${localStorageData.token}` },
    })
      .then((res) => {
        if (!res.ok) {
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAllArticles(data);
        setOrderedArticles(data);
      });
  };

  const showArticleDesc = (articleBody) => {
    swal({
      title: articleBody,
      button: "خروج",
    });
  };
  const deleteArticleHandler = (articleID) => {
     const localStorageData = JSON.parse(localStorage.getItem("user"));
     swal({
       title: "",
       text: "آیا از حذف کاریر اطمینان دارید؟",
       icon: "warning",
       buttons: ["خیر", "بله"],
       dangerMode: true,
     }).then((willDelete) => {
       if (willDelete) {
         fetch(`http://localhost:4000/v1/articles/${articleID}`, {
           method: "DELETE",
           headers: {
             Authorization: `Bearer ${localStorageData.token}`,
           },
         }).then((res) => {
           if (res.ok) {
             swal("کاربر مورد نظر با موفقیت حذف گردید", {
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
    <>
      <div className='home-content-edit'>
        <AddEdit kind='article' getAllData={getData} usersData={allArticles} />
      </div>
      <DataTable title={"مقاله ها"} count={allArticles.length}>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>لینک</th>
              <th>متن مقاله</th>
              <th>مدرس</th>
              <th>وضعیت انتشار</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {showArticles.map((article, index) => (
              <tr key={article._id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>
                  <Button
                    className='btn btn-success'
                    to={`/article-info/${article.shortName}`}>
                    مشاهده
                  </Button>
                </td>
                <td>
                  <Button
                    className='btn btn-success'
                    onClick={() => showArticleDesc(article.body)}>
                    مشاهده
                  </Button>
                </td>
                <td>{article.creator.name}</td>
                <td>
                  {article.publish === 1 ? (
                    <h6 className=' text-success'>انتشار شده</h6>
                  ) : (
                    <Button className='btn btn-warning'>پیش نویس</Button>
                  )}
                </td>
                <td>
                  <Button
                    onClick={() => deleteArticleHandler(article._id)}
                    className='btn btn-danger'>
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
      <Pagination
        items={orderedArticles}
        itemCount={5}
        pathName={`/p-admin/articles`}
        setShow={setShowArticles}
      />
    </>
  );
}
