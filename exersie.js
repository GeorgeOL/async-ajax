//Exercitiul #1

fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(console.log);

async function fetchUsers() {
    const rest = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await rest.json();
}

//Exercitiul #2 si #3
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

// const getData = async function () {
//     const [users, posts, albums] = await Promise.all(
//         urls.map((url) => fetch(url).then((resp) => resp.json())),
//     );
//     console.log("users", users);
//     console.log("posta", posts);
//     console.log("albums", albums);
// };

const getData2 = async function () {
    try{
        const rest = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await rest.json();
        console.log("users", data);
    }catch(err){   console.log(err, "uhhh")}
}