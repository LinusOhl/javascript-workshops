const firstLink = document.querySelector("#link-1");
const firstLinkParent = firstLink.parentElement;
const firstParagraph = document.querySelector("p");

console.log(firstParagraph.innerHTML);
console.log(firstParagraph.innerText);

const secondParagraph = document.querySelector("p.error");

const movie = {
  title: "Star Wars",
  synopsis: "A young farmer rescues the galaxy.",
  year: 1977,
  director: "George Lucas",
  genres: ["Sci-fi", "Space Opera"],
};
