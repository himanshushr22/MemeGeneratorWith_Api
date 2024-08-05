const btn = document.querySelector('.img-generate');
const titlee = document.querySelector('.title');
const image = document.querySelector('.image');
const authorr = document.querySelector('.author');

const updateAll = (url, title, author) => {
    image.setAttribute('src', url);
    titlee.innerHTML = title;
    authorr.innerHTML = `Author name: ${author}`;
}

const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response => response.json())
    .then(data => updateAll(data.url, data.title, data.author))
}

btn.addEventListener('click', generateMeme);

generateMeme();