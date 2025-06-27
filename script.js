/* ======= CONTACT FORM VALIDATION ======= */
const form   = document.getElementById("contactForm");
const status = form?.querySelector(".form-msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "❌ Please fill out all required fields.";
      status.style.color = "#dc2626";
      return;
    }

    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.value.trim());
    if (!emailOK) {
      status.textContent = "❌ Enter a valid email (e.g. user@example.com)";
      status.style.color = "#dc2626";
      return;
    }

    status.textContent = "✅ Message sent! (Demo only)";
    status.style.color = "#16a34a";
    form.reset();
  });
}

/* ======= TO-DO LIST ======= */
function addTask(text) {
  const li   = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.addEventListener("click", () => li.remove());

  li.append(span, delBtn);
  todoList.prepend(li);
}

const todoForm  = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList  = document.getElementById("todoList");

if (todoForm) {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;
    addTask(text);
    todoInput.value = "";
    todoInput.focus();
  });
}

/* 👉 Optional demo item */
addTask("Cycling");
