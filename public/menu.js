
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.createElement("nav");
  menu.classList.add("top-menu");
  menu.innerHTML = `
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
      <li><a href="/notes">Notes</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  `;
  document.body.prepend(menu);
});

