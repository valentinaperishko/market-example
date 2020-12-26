// handlebars template

// ПОЛУЧАЕМ ДОСТУП К ДОМ-ЭЛЕМЕНТУ, КУДА ВТРАИВАТЬ РЕЗУЛЬТАТЫ ШАБЛОНОВ
import postsRef from "./refs.js";
const { posts: postSection, postForm } = postsRef;

// console.log(postSection, postForm);

// МАССИВ ДАННЫХ ДЛЯ ШАБЛОНА
import postsList from "../data/posts.js";
// console.log(postsList);

// СОБСТВЕННО САМ ШАБЛОН
import postTemplate from "../templates/post.hbs";
// console.log(postTemplate);

// СОЗДАЕМ ЭЛЕМЕНТЫ ПО ШАБЛОНУ
const newPost = postTemplate(postsList);
// console.log(newPost)

// ВСТРАИВАЕМ В HTML РЕЗУЛЬТАТ
// postSection.insertAdjacentHTML("afterbegin", newPost);

// JSON
const user = {
  name: "Sandra",
  age: 30,
};
// console.log(user);
// console.log(JSON);

// const userJSON = {
//   "name": "Sandra",
//   "age": "30",
//   "skills": [],
// };

const jsonUser = JSON.stringify(user);
// console.log(jsonUser);

const newUser = JSON.parse(jsonUser);
// console.log(newUser);

console.log(localStorage);

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.currentTarget.elements.title;
  const textarea = e.currentTarget.elements.post;

  localStorage.setItem("input", input.value);
  localStorage.setItem("textarea", textarea.value);
});

const inputValue = localStorage.getItem("input");
const textareaValue = localStorage.getItem("textarea");
console.log("inputValue: ", inputValue);
console.log("textareaValue: ", textareaValue);

localStorage.setItem("input", "12345");

localStorage.removeItem("input");
localStorage.clear();

// localStorage.getItem()
// localStorage.setItem()