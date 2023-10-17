import { useEffect, useState } from "react"
import PostCard from "../PostCard/PostCard"
import axios from "axios";


function PostCardLists() {
    const [posts, setPosts] =useState([]);

    useEffect(() => {
        
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/post' ,{
              headers: {'app-id': '64ae4cbd6f33143ec15e49b0'}
    })
    .then(response => {
        const responseObject = response.data;
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