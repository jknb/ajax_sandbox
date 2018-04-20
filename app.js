document.querySelector('#button1').addEventListener('click', getText);

document.querySelector('#button2').addEventListener('click', getJson);

document.querySelector('#button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.querySelector('#output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson() {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let output = '';
        data.forEach(function(post) {
            output += `<ul>
                        <li>${post.title}</li>
                       <li>${post.body}</li>
                       </ul>
            `;
        });
        

        document.querySelector('#output').innerHTML = output;
    })
}

function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let id = 1;
        let output = '';
        data.forEach(function(user) {
            output += `<ul>
                       <li>${id}: ${user.login}</li>
                       </ul>
            `;
            id++;
        });
        

        document.querySelector('#output').innerHTML = output;
    })
}


