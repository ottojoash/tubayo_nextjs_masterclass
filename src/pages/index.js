// pages/index.js
import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link href="/about">About Page    </Link>
    <br />
    <Link href="/blog">Blog</Link>
  </div>
);

export default Home;
