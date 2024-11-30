import { useEffect, useState } from "react";
import CourseCard from "../courseCard/courseCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div className="w-3/4 p-9">
            <h1 className="text-2xl">Course Name: {blogs.length}</h1>
           <div className="grid md:grid-cols-3 gap-3 ">
           {
                blogs.map(blog => <CourseCard key={blog.id} blog={blog}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default Blogs;