const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos'
]
// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
// }))
//     .then(array => {
//         console.log(array[0])
//         console.log(array[1])
//         console.log(array[2])
//         console.log(array[3])
//     })
//     .catch(err => console.log(err, 'ughh shit you missed it'));


// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users',
//             'https://jsonplaceholder.typicode.com/albums',
//                 'https://jsonplaceholder.typicode.com/photos');
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {console.log(error, 'uhahaha');}
// }


const gettt = async function () {
    try {
        const [ users, albums, photos, todos ] = await Promise.all(
            urls.map(async (url) => {
                const respp = await fetch(url);
                const data = await respp.json();
                return data;
            })
        );
        console.log(users);
        console.log(albums);
        console.log(photos);
        console.log(todos);
    }catch (erro) {
        console.log(erro, '5 uhahaha');
    }
}