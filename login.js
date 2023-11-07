const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
var arr = [];
registerLink.onclick = () => {
    wrapper.classList.add('active');
}
loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

const usernameRegex = /^[a-zA-Z0-9_\s]{3,20}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>?/-]).{8,}$/;
// At least 8 characters long.
// Contains at least one lowercase letter.
// Contains at least one uppercase letter.
// Contains at least one digit.
// May contain special characters: !@#$%^&*()_+[]{};':",.<>?/-

const users = [
    {
        name: "Han Thar Soe",
        email: "yinnwe1973@gmail.com",
        password: "HTS!@#hts11"
    }
];

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName1").value;
    const email = document.getElementById("registerEmail1").value;
    const password = document.getElementById("registerPassword11").value;

    if (!passwordRegex.test(password)) {
        alert("Invalid password format. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.");
        return;
    }
    if (!usernameRegex.test(name)) {
        alert("Invalid name format. User name must be between 3-20 characters and can only contain letters, numbers, and underscores.");
        return;
    }

    users.push({ name, email, password });
    alert("Registration successful. You can now log in.");
    signupForm.reset();
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful. Welcome, " + user.name + "!");
        window.location.href = "home.html";
        console.log("Redirecting to home.html"); // Add this line for debugging
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
    let lockIcon = document.getElementById("lockIcon");
    let pass = document.getElementById("loginPassword");

    lockIcon.onclick = function() {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
let pass11 = document.getElementById("registerPassword11");
let lockIcon1 = document.getElementById("lockIcon1");

lockIcon1.onclick = function() {
    if (pass11.type === "password") {
        pass11.type = "text";
    } else {
        pass11.type = "password";
    }
}

