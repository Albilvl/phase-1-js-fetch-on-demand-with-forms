const init = () => {
  const inputForm = document.querySelector(`form`); 
  const input = document.querySelector(`#searchByID`)
  inputForm.addEventListener(`click`, (e) => {
      e.preventDefault()
      bookSearch(input.value)

    //   const input = document.querySelector(`#searchByID`)
    //   fetch(`http://localhost:3000/movies/${input.value}`)
    //   .then(res => res.json())
    //   .then (data => {
    //     const title = document.querySelector('section#movieDetails h4');
    //     const summary = document.querySelector('section#movieDetails p');
    //     title.innerText = data.title;
    //     summary.innerText = data.summary;
    bookSearch
        inputForm.reset();
      })
  }



function bookSearch (input){
    fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    .then (data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title;
      summary.innerText = data.summary;
}
    )}
document.addEventListener('DOMContentLoaded', init);