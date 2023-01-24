import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function getProgressColor(percent){
  let r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
  let g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
  return 'rgb('+r+','+g+',0)';
}

function App() {
  const [count, setCount] = useState(0)
  var titles = Array('Indiana Jones and the Raiders of the Lost Ark',
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'The Godfather: Part II',
    '12 Angry Men',
    'Schindler\'s List',
    'The Lord of the Rings: The Return of the King',
    'Pulp Fiction',
    'The Lord of the Rings: The Fellowship of the Ring' )
  var descriptions = Array('Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.',
  'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
  'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
  'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
  'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
  'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
  'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
  'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'  )

  var images = Array('https://filmconcertslive.com/wp-content/uploads/2015/02/raiders-of-the-lost-ark-poster.jpg',
  'https://m.media-amazon.com/images/I/71715eBi1sL.jpg',
  'https://m.media-amazon.com/images/I/61MwEEt+NXL._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'https://m.media-amazon.com/images/I/71X6YzwV0gL.jpg',
  'https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg',
  'https://m.media-amazon.com/images/I/71TZ8BmoZqL.jpg'
)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rater</h1>
      <h2>Movie search</h2>
      <div className="card">
        <p>
          Enter tags you would like to see
        </p>
        <input type="text" id="tag-input"/>
        <button className="button" onClick={() => {
            var inputs = document.getElementById('tag-input').value.split(',')
            document.getElementById('tag-input').value = ''

            for(let i = 0; i < 10; i++){
              const containerDiv = document.createElement("div")
              containerDiv.className = 'container'

              const leftDiv = document.createElement("div")
              leftDiv.className = 'left-container'

              const middleDiv = document.createElement("div")
              middleDiv.className = 'middle-container'

              const rightDiv = document.createElement("div")
              rightDiv.className = 'right-container'

              containerDiv.appendChild(leftDiv)
              containerDiv.appendChild(middleDiv)
              containerDiv.appendChild(rightDiv)

              const imageDiv = document.createElement("img")
              imageDiv.className = 'movie-image'
              imageDiv.src = images[i]
              leftDiv.appendChild(imageDiv)

              const titleDiv = document.createElement("div")
              titleDiv.className = 'title-item'
              titleDiv.style.fontSize = "25px";
              titleDiv.innerHTML = titles[i]
              middleDiv.appendChild(titleDiv)

              const descDiv = document.createElement("div")
              descDiv.className = 'desc-item'
              descDiv.innerHTML = descriptions[i]
              middleDiv.appendChild(descDiv)

              for(var input of inputs){
                const ratingDiv = document.createElement("div")
                ratingDiv.className = 'rating-item'
                let rating = Math.floor(Math.random() * 10)
                ratingDiv.innerHTML = input + ': ' + rating;
                ratingDiv.style.borderColor = getProgressColor(rating*10)
                rightDiv.appendChild(ratingDiv)
              }


              document.getElementById('items-list').appendChild(containerDiv)
            }
          }
        }>
          search
        </button>
        <div className="card" id="items-list">

        </div>
      </div>

    </div>
  )
}

export default App
