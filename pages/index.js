import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Necati Arman Blog</title>
      <link rel="icon" href="/2.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </Head>
    <img className="logo" src="site2.png"></img>
    <div className="hero">
      <h1 className="hero-title">Necati ARMAN</h1>
      <div className="hero-social-links">
        <Link href="https://www.instagram.com/necati_arman_offical/">
          <a className="social-link">Instagram</a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003946455226">
          <a className="social-link">facebook</a>
        </Link>
      </div>
    </div>
    
    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}

    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
      }
      
      .hero {
        text-align: center;
        margin -186px 0 0 0 ;
      }

      .social-link {
        margin-right: 8px;
        color:black;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        color: red;
        margin 12px 0 48px 0;
        padding: 0 5px 5px 0;
      }

      a {
        color: #ff6200;
        text-decoration: none;
      }
      .blog{
        background-color:#e5b79a;
        border-radius:15px;
      }
      .blog-title{
        padding: 5px 0 0 5px;
      }
      .blog-text{
        padding: 0 0 0 5px;
      }
      .logo{
        margin: -50px 0 0 -50px;
      }
    `}</style>
  </div>
);
<script>
{
  document.body.style.backgroundImage="url('yeni.jpg')"
}
</script>
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
