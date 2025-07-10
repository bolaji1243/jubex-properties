// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCNnNgtU1nYIBRcoooP7fzHBU6YoPL5qQk",
  authDomain: "jubex-properties.firebaseapp.com",
  projectId: "jubex-properties",
  storageBucket: "jubex-properties.appspot.com",
  messagingSenderId: "268064410893", // replace this
  appId: "1:268064410893:web:eee895b293cd0fbaf0f444", // replace this
  databaseURL: "https://jubex-properties.firebaseio.com",
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 🔄 Tab switcher (email/phone)
function showTab(type) {
  document.getElementById('phoneLogin').style.display = type === 'phone' ? 'block' : 'none';
  document.getElementById('emailLogin').style.display = type === 'email' ? 'block' : 'none';
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab[onclick="showTab('${type}')"]`).classList.add('active');
}

// 📧 Email login
function handleEmailLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("emailPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("✅ Logged in with email");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
}

// 📱 Phone login (simulate with email format)
function handlePhoneLogin(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("phonePassword").value;
  const fakeEmail = `${phone}@jubex.com`;

  auth.signInWithEmailAndPassword(fakeEmail, password)
    .then(() => {
      alert("✅ Logged in with phone");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
}

// 🔐 Google login
function handleGoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      alert("✅ Google login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
}



// 🚪 Optional Logout
function handleLogout() {
  auth.signOut().then(() => {
    alert("👋 Logged out");
    window.location.href = "login.html";
  });
}
