// Developed By Omar Abu Snineh
// Using 'JSON Placeholder' Api

//######### Using XMLHttpRequest Method #########

function setPostsCard(posts) {
  // declaration new variable named postsCard
  postsCard = document.querySelector("#postsCard");
  for (post in posts) {
    let postCard = `
          <article
          class="bg-blue-200 mx-10 my-5 rounded-xl h-1/3 w-9/12 p-5 overflow-y-auto"
          >
          <h1 class="text-3xl font-semibold leading-10 my-4 text-center">
            ${posts[post].title}
          </h1>
          <hr class="border border-black" />
          <p class="text-lg leading-normal my-3">
          ${posts[post].body}
          </p>
          </article>
        `;
    postsCard.innerHTML += postCard;
    console.log(posts[post].userId);
  }
}

function getAllPostsForUserFromApi(index) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/users/${index + 1}/posts`
  );

  request.responseType = "json";

  request.send();

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let response = request.response;
      let posts = response;
      postsCard.innerHTML = "";
      setPostsCard(posts);
      console.log("🚀 ~ create ~ response:", response);
      console.log(`The status code is ${request.status}`);
    } else {
      console.log("Error getAllPostsForUserFromApi method");
    }
  };
}

function setUsersCard(users) {
  let usersCard = document.querySelector("#usersCard");
  for (user in users) {
    let userCard = `
        <div
          class="user bg-blue-300 hover:bg-sky-400 h-24 w-10/12 mx-auto my-4 rounded-xl p-4 cursor-pointer"
          onclick="getAllPostsForUserFromApi(${user})"
        >
          <h1 id="userName" class="text-2xl font-semibold">${users[user].name}</h1>
          <h3 id="userMail" class="text-sm leading-8">${users[user].email}</h3>
        </div>
        `;
    usersCard.innerHTML += userCard;
    console.log(users[user].id);
  }
}

function getAllUsersFromAPI() {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/users");

  request.responseType = "json";

  request.send();

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let response = request.response;
      let users = response;
      setUsersCard(users);
      console.log("🚀 ~ create ~ response:", response);
      console.log(`The status code is ${request.status}`);
    } else {
      console.log("Error getAllUsersFromAPI method");
    }
  };
}

getAllUsersFromAPI();
