import React from 'react'; 

import ReactDOM from 'react-dom/client'; 

import './booklist.css';

const books = [
  {
    title : "Atomic Habits", Author:"Devangi", image:"images/book.jpg",price : '500rs',button : 'Buy now',id:1
  },
  {
    title : "101 Essay that change ", Author:"Heel", image:"images/book3..jpg",price : '500rs',button : 'Buy now',id:2
  },
  {
    title : "Life's Amazing Secret", Author:"Disha", image:"images/book4.jpg",price : '500rs',button : 'Buy now',id:3
  },
  {
    title : "Life's Amazing Secret", Author:"Disha", image:"images/book4.jpg",price : '500rs',button : 'Buy now',id:3
  }
];
const BookList=()=>{
  return(
    <section className='book'>
    {
      books.map((book,id)=>{
        return(
          <Book title={book.title} Author={book.Author} image={book.image} price={book.price} button={book.button} key={id}/>
        );        
    })}
    </section>
  );
}
const Book=({title, Author, image,price,button})=>{
  return(
    <article>
      <h2>{title}</h2>
      <h2>Author : {Author}</h2>
      
      <img src={image} style={{width:'350px', height:'500px', border:'2px solid black'}}></img>
      <h2>{price}</h2>
      <label>Quantity : </label><br/><input type='number'></input><br></br>
      <button>{button}</button>
     
    </article>
  );
}

export default BookList;