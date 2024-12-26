import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Access the dynamic `id` parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* Fetch and display blog post content here based on `id` */}
      <p>Content for blog post {id} goes here.</p>
    </div>
  );
};

export default BlogPost;
