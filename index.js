document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convert-btn").addEventListener("click", function () {
    const post = document.querySelector("textarea.post").value;
    const convertedPost = postConverter(post);
    document.querySelector("textarea.post-output").textContent = convertedPost;
    document.querySelector("textarea.post-output").value = convertedPost;
  });
});
