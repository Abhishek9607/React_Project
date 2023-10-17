import { useEffect, useState } from "react"
import PostCard from "../PostCard/PostCard"
import axios from "axios";


function PostCardLists() {
    const [posts, setPosts] =useState([]);

    useEffect(() => {
        console.log(import.meta.env.VITE_APP_ID)
     
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/post' ,{
           
              headers: {'app-id': import.meta.env.VITE_APP_ID}
    })
    .then(response => {
        const responseObject = response.data;
        console.log(responseObject);
        setPosts([...responseObject.data]);
    })
    }, [])

  return (
    (posts.length == 0) ? "loading..." :
    posts.map((post) => <PostCard
                           key={post.id} 
                           text={post.text}
                           image={post.image} 
                           content={post.content}  
                           authorFirstName={post.owner.FirstName}
                        />)
  )
}

export default PostCardLists