var posts=["2025/02/01/hello-world/","2024/01/01/1/","2025/02/03/2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };