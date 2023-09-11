// // pages/blog.js
// import useSWR from 'swr';
// import postsData from './data'; // Import the dummy data


// // Function to fetch data from the API
// const fetcher = (url) => fetch(url).then((res) => res.json());

// const Blog = () => {
//   // Used the dummy data and enabled caching and revalidation using SWR 
//   const { data: posts, error } = useSWR('/api/posts', fetcher, {
//     initialData: postsData, // Set initial data from the dummy data
//     refreshInterval: 10000, // Revalidate data every 10 seconds
//   });

//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       {error && <div>Error loading posts</div>}
//       {!posts && !error && <div>Loading...</div>}
//       {posts && (
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Blog;


// pages/blog.js
import { useState } from 'react';
import postsData from './data'; // Import the dummy data

const Blog = () => {
  const [posts, setPosts] = useState(postsData);
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);

  //   // Simulate fetching new data from an API (in this case, we're using the same dummy data)
  //   // const response = await fetch('/api/posts');
  //   // const newPostsData = await response.json();

  //   setPosts(newPostsData);
  //   setLoading(false);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh Data'}
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;

