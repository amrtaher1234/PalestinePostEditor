const postConverter = (post = "") => {
  CONVERTED_WORDS.forEach((obj) => {
    if (typeof obj.word.replaceAll === "function") {
      post = post.replaceAll(obj.word, obj.convertedWord);
    } else {
      const regx = new RegExp(obj.word, "g");
      post = post.replace(regx, obj.convertedWord);
    }
  });
  return post;
};
