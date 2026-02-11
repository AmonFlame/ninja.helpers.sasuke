function openInstagram(e) {
  e.preventDefault();

  const app = "instagram://user?username=kaigosasuke";
  const web = "https://www.instagram.com/kaigosasuke";

  window.location = app;

  setTimeout(() => {
    window.location = web;
  }, 500);
}
