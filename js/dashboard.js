import { auth } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const userDoc = await getDoc(doc(db, "users", user.uid));
  const data = userDoc.data();

  document.getElementById("userEmail").innerText =
    `Logged in as: ${data.email}`;

  if (data.credits === "unlimited") {
    document.getElementById("userEmail").innerText += " 🔥 UNLIMITED OWNER";
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
