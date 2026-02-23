import './blog.css'
import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
import BlogCard from '../components/BlogCard'
const Blog = () => {
  let blog_list = [
      {
        img: img08,
        title: "2D Featured Creator Bundle",
        para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste sit magnam inventore recusandae
              animi rem? `,
        author: "J.son",
        date: " April 12",
        imgHeight: 210,
        layout: "flex_box",
      },
      {
        img: img08,
        title: "2D Featured Creator Bundle",
        para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste sit magnam inventore recusandae
              animi rem? `,
        author: "J.son",
        date: " April 12",
        imgHeight: 210,
        layout: "flex_box",
      },
      {
        img: img08,
        title: "2D Featured Creator Bundle",
        para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste sit magnam inventore recusandae
              animi rem? `,
        author: "J.son",
        date: " April 12",
        imgHeight: 210,
        layout: "flex_box",
      },
      {
        img: img08,
        title: "2D Featured Creator Bundle",
        para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste sit magnam inventore recusandae
              animi rem? `,
        author: "Sumit Sharma",
        date: " April 12",
        imgHeight: 210,
        layout: "flex_box",
      },
    ];
  return (
    <>
     <Header
        title="Leatest Blogs & Update"
        para="Read the latest blogs and update fron NavaAsset"
        bg={img08}
      />
      <div className=" container flex_box">
        <section className="blogs">
         {blog_list.map((item, index) => (
            <BlogCard
             id={index}
              img={item.img}
              title={item.title}
              para={item.para}
              author={item.author}
              date={item.date}
            />
           ))} 
        </section>
   
      </div>
    </>
  )
}

export default Blog