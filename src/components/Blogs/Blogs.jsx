import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch('blogs.json');
        const blogsData = await response.json();
        // console.log(blogsData);
        setBlogs(blogsData);

        
      } catch (error) {
        console.log(error);
        
      }

    }
    fetchData();
  },[]);
  return (
    <div className="w-2/3">
      <h3>Blogs:</h3>
      {
        blogs && blogs.map((blog)=> <Blog key={blog.id} blog={blog}></Blog>)
      }
      
    </div>
  );
};

export default Blogs;