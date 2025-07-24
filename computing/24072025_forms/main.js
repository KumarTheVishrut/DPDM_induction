// 1. Click Event
document.getElementById("clickMeBtn").addEventListener("mouseover", () => {
    document.getElementById("clickOutput").textContent = "Button was clicked! Bhai log mazza aa gaya!";
});

// 2. Input and Output
document.getElementById("greetBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greetOutput").textContent = name
        ? `Hello, ${name}!`
        : "Please enter your name.";
});

// 3. Simple Calculator
document.getElementById("addBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("calcOutput").textContent = isNaN(result) ? "Invalid input" : result;
});

// 4. Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = email && password
        ? "Sign up successful!"
        : "Please fill out all fields.";
    document.getElementById("formMessage").textContent = message;
});

// 5. Toggle Visibility
document.getElementById("toggleBtn").addEventListener("click", () => {
    const text = document.getElementById("toggleText");
    text.classList.toggle("hidden");
});

// 6. Dynamic List
document.getElementById("addItemBtn").addEventListener("click", () => {
    const itemInput = document.getElementById("itemInput");
    const itemValue = itemInput.value.trim();
    if (itemValue) {
        const li = document.createElement("li");
        li.textContent = itemValue;
        document.getElementById("itemList").appendChild(li);
        itemInput.value = "";
    }
});

// 7. Animation
document.getElementById("animateBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    let pos = 0;
    box.style.left = "0px";

    const id = setInterval(() => {
        if (pos >= 300) {
            clearInterval(id);
        } else {
            pos += 2;
            box.style.left = pos + "px";
        }
    }, 10);
});

// 8. localStorage
document.getElementById("saveNoteBtn").addEventListener("click", () => {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("note", note);
    document.getElementById("savedNote").textContent = note;
});

// Load saved note on page load
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("note");
    if (saved) {
        document.getElementById("savedNote").textContent = saved;
    }
});


