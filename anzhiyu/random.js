var posts=["2025/02/01/hello-world/","2025/02/01/1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };