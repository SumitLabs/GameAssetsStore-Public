import './blog.css'
import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
const Blog = () => {
  return (
    <>
     <Header
        title="Leatest Blogs & Update"
        para="Read the latest blogs and update fron NavaAsset"
        bg={img08}
      />
    </>
  )
}

export default Blog