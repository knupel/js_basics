document.getElementById("fetchForm").addEventListener("submit", submitPost);

async function submitPost(e) {
    e.preventDefault();

    let title = document.getElementById("titleInput").value;
    let body = document.getElementById("bodyInput").value;

    const options = {
        method: "POST",
        // body: { title: title, body: body }, // here now there is an error to catch
        body: JSON.stringify({ title: title, body: body }),
        headers: new Headers({
        "Content-Type": "application/json"
        })
    };

    const postPromise = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
    );
  
    if(postPromise.ok) {
        const post = await postPromise.json();

        title = post.title;
        body = post.body;
    } else {
        title = 'Error';
        body = `Status: ${postPromise.status}`;
    }
  
    document.querySelector(".card-title").innerText = title;
    document.querySelector(".card-text").innerText = body;

    document.getElementById("fetchForm").reset();
}