function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json'
    let author = document.getElementById('author');
    let message = document.getElementById('content');
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let messsagesDiv = document.getElementById("messages");


    sendBtn.addEventListener('click', () => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ author: `${author.value}`, content: `${message.value}` })

        });
        author.value = '';
        message.value = '';
    });


    refreshBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let result = Object.values(data).reduce((acc, x) =>
                    (acc += `${x.author} : ${x.content}, \n`), "");
                let newLi = document.createElement("li");
                messsagesDiv.textContent = result;
                messsagesDiv.append(newLi);
            })
    });
}

attachEvents();