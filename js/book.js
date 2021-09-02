
const searchBook = () => {
    const searchField = document.getElementById('search-id');
    const searchText = searchField.value;
    searchField.value = '';


    if (searchText === '') {

        document.getElementById('error-message').style.display = "can't be empty";
    }
    else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooks(data.docs));

    }
}


searchBook();

const displayBooks = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(docs => {
        console.log(docs);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

        
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${docs.title}</h5>
                    <p class="card-text">Author: ${docs.author_name}</p>
                    <p class="card-text">Publisher: ${docs.publisher}</p>
                    <p class="card-text">Publish Year: ${docs.publish_year}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })

}

