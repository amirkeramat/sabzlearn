import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import CourseInfoHeader from "../../Components/CourseInfoComponents/CourseInfoHeader/CourseInfoHeader";
import "./CourseInfo.css";
import CourseInfoBox from "../../Components/CourseInfoComponents/CourseInfoBox/CourseInfoBox";
import CourseProgress from "../../Components/CourseInfoComponents/CourseProgress/CourseProgress";
import CourseIntroduction1 from "../../Components/CourseInfoComponents/CourseIntoduction1/CourseIntroduction1";
import CourseIntroduction2 from "../../Components/CourseInfoComponents/CourseIntroduction-2/CourseIntoduction2";
import CourseIntroductionBtns from "../../Components/CourseInfoComponents/CourseIntrodutionBtns/CourseIntroductionBtns";
import TopicAccordion from "../../Components/CourseInfoComponents/TopicAccordion/TopicAccordion";
import TeacherDetail from "../../Components/CourseInfoComponents/TeacherDetail/TeacherDetail";
import CourseInfoRegister from "../../Components/CourseInfoComponents/CourseInfoRegister/CourseInfoRegister";
import CourseInfoTotal from "../../Components/CourseInfoComponents/CourseInfoTotal/CourseInfoTotal";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CourseInfoLink from "../../Components/CourseInfoComponents/CourseInfoLink/CourseInfoLink";
import CourseInfoTopic from "../../Components/CourseInfoComponents/CourseInfoTopic/CourseInfoTopic";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../Components/Form/Button/Button";
import swal from "sweetalert";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import AuthContext from "../../context/AuthContext";
export default function CourseInfo() {
  const authContext = useContext(AuthContext);
  const [courseInfoData, setCourseInfoData] = useState({});
  // const [categoryData, setCategoryData] = useState({});
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const { courseName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          localStorageData === null ? null : localStorageData.token
        }`,
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
      .then((courseData) => {
        setCourseInfoData(courseData);
        // setCategoryData(courseData.categoryID);
        setUpdatedAt(courseData.updatedAt);
        setSessions(courseData.sessions);
        setCommentsData(courseData.comments);
      })
      .catch((err) => {});

    fetch(`http://localhost:4000/v1/courses/related/${courseName}`, {
      method: "GET",
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
        setRelatedCourses(data);
      })
      .catch((err) => {
        swal({
          title: "دوره مورد نظر یافت نشد",
          icon: "error",
          button: "رفتن به تمامی دوره ها",
        }).then((value) => {
          navigate("/courses/1");
        });
      });
  }, [courseName]);

  return (
    <>
      <header>
        <Topbar />
        <Navbar />
      </header>
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "/" },
          { id: 2, title: "جزیات دوره", href: "courses" },
          {
            id: 3,
            title: `${courseInfoData.name}`,
            href: `course-info/${courseInfoData.name}`,
          },
        ]}
      />
      ‍‍‍‍‍‍‍‍
      <CourseInfoHeader {...courseInfoData} />
      <main className='main'>
        <div className='container'>
          <div className='row'>
            <div className='mainCourse-right col-8'>
              <div className='course'>
                <div className='course-boxes'>
                  <div className='row'>
                    <CourseInfoBox
                      title='وضعیت دوره:'
                      subtitle={
                        courseInfoData.isComplete === 0
                          ? "در حال ضبط"
                          : "دوره به اتمام رسیده است"
                      }
                      icon='fas fa-graduation-cap'
                    />
                    <CourseInfoBox
                      title='مدت زمان دوره:'
                      subtitle='19 ساعت'
                      icon='fas fa-clock'
                    />
                    <CourseInfoBox
                      title='آخرین بروزرسانی:'
                      subtitle={updatedAt.slice(0, 10)}
                      icon='fas fa-calendar-alt'
                    />
                    <CourseInfoBox
                      title='روش پشتیبانی'
                      subtitle={courseInfoData.support}
                      icon='fas fa-user-alt'
                    />
                    <CourseInfoBox
                      title='پیش نیاز:'
                      subtitle='HTML CSS'
                      icon='fas fa-info-circle'
                    />
                    <CourseInfoBox
                      title='نوع مشاهده:'
                      subtitle='ضبط شده / آنلاین'
                      icon='fas fa-play'
                    />
                  </div>
                </div>
                <div className='courseProgressBar'>
                  <CourseProgress />
                </div>
                <div className='introduction'>
                  <CourseIntroduction1 />
                  <CourseIntroduction2 />
                  <CourseIntroductionBtns />
                  <div className='introduction__topic'>
                    <Accordion defaultActiveKey='0'>
                      {sessions.length ? (
                        sessions.map((session) => (
                          <TopicAccordion
                            key={session._id}
                            eventKey={session._id}
                            title={session.title}
                            body={session.title}
                            time={session.time}
                          />
                        ))
                      ) : (
                        <TopicAccordion
                          eventKey={1}
                          title='دوره در حال ضبط میباشد'
                          body='دوره در حال ضبط میباشد'
                        />
                      )}
                    </Accordion>
                  </div>
                  <TeacherDetail />
                  <CommentsTextArea
                    isLoggedIn={authContext.isLoggedIn}
                    commentsData={commentsData}
                  />
                </div>
              </div>
            </div>
            <div className='mainCourse-left col-4'>
              <div className='courses-info'>
                <div className='course-info'>
                  <CourseInfoRegister
                    title={courseInfoData.isUserRegisteredToThisCourse}
                  />
                </div>
                <div className='course-info'>
                  <CourseInfoTotal
                    student={courseInfoData.courseStudentsCount}
                    Comment={courseInfoData.comments}
                    views={"123"}
                  />
                </div>
                <div className='course-info'>
                  <CourseInfoLink />
                </div>
                <div className='course-info'>
                  <CourseInfoTopic />
                </div>
                <div className='course-info'>
                  <div className='courseInfo__relatedCourses'>
                    <span className='course-info__courses-title'>
                      دوره های مرتبط
                    </span>
                    <ul className='course-info__courses-list'>
                      {relatedCourses.map((course) => (
                        <li
                          key={course._id}
                          className='course-info__courses-list-item'>
                          <Button
                            href='#'
                            className='course-info__courses-link'>
                            <img
                              src={`/images/courses/${course.cover}`}
                              alt='Course Cover'
                              className='course-info__courses-img'
                            />
                            <span className='course-info__courses-text'>
                              {course.name}
                            </span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
