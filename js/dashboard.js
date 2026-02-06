import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* =====================
   AUTH PROTECTION
===================== */
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.data();

  let text = `Logged in as: ${data.email}`;

  if (data.credits === "unlimited") {
    text += " 🔥 OWNER (UNLIMITED)";
  } else {
    text += ` | Credits: ${data.credits}`;
  }

  document.getElementById("userEmail").innerText = text;
});

/* =====================
   CREDIT USAGE
===================== */
window.useCredits = async function (amount) {
  const user = auth.currentUser;
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  const data = snap.data();

  if (data.credits === "unlimited") {
    alert("Unlimited user 🚀");
    return;
  }

  if (data.credits < amount) {
    alert("Not enough credits ❌");
    return;
  }

  await updateDoc(ref, {
    credits: data.credits - amount
  });

  location.reload();
};

/* =====================
   LOGOUT
===================== */
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
