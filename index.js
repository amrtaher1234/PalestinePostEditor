document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convert-btn").addEventListener("click", function () {
    const post = document.querySelector("textarea.post").value;
    const convertedPost = postConverter(post);
    document.querySelector("textarea.post-output").textContent = convertedPost;
    document.querySelector("textarea.post-output").value = convertedPost;
    enableCopyButton();
  });
  document.getElementById('copy-btn').addEventListener('click', function () {
    copyPost();
  });
});

function enableCopyButton() {
  document.getElementById('copy-btn').disabled = false;
}

function copyPost() {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  const text = document.getElementById('post-output').value;
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}