// ─── 1. GET A USER (like login) ──────────────────
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }

  const data = await res.json();
  console.log("Got User:", data);

  // save the user id as our fake "token"
  localStorage.setItem("userId", data.id);
  console.log("User ID saved to localStorage!");
}

// ─── 2. GET POSTS (like protected API) ───────────
async function getPosts() {
  const userId = localStorage.getItem("userId"); // read saved id
  console.log("Using saved userId:", userId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  const posts = await res.json();

  console.log("Got Posts:", posts);
}

// ─── 3. LOGOUT ────────────────────────────────────
function logout() {
  localStorage.removeItem("userId");
  console.log("Logged out! userId removed.");
}

// ─── CALL THEM ────────────────────────────────────
getUser();
getPosts();
// logout();
