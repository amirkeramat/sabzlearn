import Index from "../pages/Index/Index"
import CourseInfo from "../pages/CourseInfo/CourseInfo"
import Category from "../pages/Category/Category"
import ArticleInfo from "../pages/ArticleInfo/ArticleInfo"
let routs = [
    {path:'/',element:<Index/>},
    {path:'/course-info/:courseName',element:<CourseInfo/>},
    {path:'/course-info/:categoryName',element:<Category/>},
    {path:'/article-info/:articleName',element:<ArticleInfo/>},

]

export default routs