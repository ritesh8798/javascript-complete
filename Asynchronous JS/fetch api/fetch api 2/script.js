async function postBanao() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Mera pehla post",
        body: "Yeh mera content hai",
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log("Post ban gaya!", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

postBanao();
