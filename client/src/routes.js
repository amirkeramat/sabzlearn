import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AllArticles from "./pages/AllArticles/AllArticles";
import Search from "./pages/Search/Search";
import Contact from "./pages/Contact/Contact";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import AdminUsers from "./Components/AdminPanel/AdminUsers/AdminUsers";
import AdminCourses from "./Components/AdminPanel/AdminCourses/AdminCourses";
import AdminArticles from "./Components/AdminPanel/AdminArticles/AdminArticles";
import AdminCategory from "./Components/AdminPanel/AdminCategory/AdminCategory";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName/:pageNumber", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses/:pageNumber", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/all-articles/:pageNumber", element: <AllArticles /> },
  { path: "/search/:searchValue", element: <Search /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "/p-admin",
    element: <AdminPanel />,
    children: [
      {
        path: "users/:pageNumber",
        element: <AdminUsers />,
      },
      {
        path: "articles",
        element: <AdminArticles />,
      },
      {
        path: "courses",
        element: <AdminCourses />,
      },
      {
        path: "category",
        element: <AdminCategory />,
      },
    ],
  },
];

export default routes;
