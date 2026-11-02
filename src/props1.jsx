import './App.css'

// 1. Create a React component called WelcomeMessage to display the message "Welcome, Emily!". 
// Pass the user name, Emily as props.

const WelcomeMessage = (props) =>{
    return <h1>Welcome, {props.name}</h1>
}

// 2. Create a React component called BookDetails to display the following details. 
// Pass the book data object as props
//  const bookData = {

//     title: "To Kill a Mockingbird",

//     author: "Harper Lee",

//     genre: "Classic",

//   };
const BookDetails = (bookData) =>{
    return(
        <div>
            <h1>Book Details</h1>
            <p>Title: {bookData.title}</p>
            <p>Author: {bookData.author}</p>
            <p>Genre: {bookData.genre}</p>
        </div>
    )
}

// 3. Create a React component called ArticleInformation to display the following details. 
// Pass the article data object as props.
// const articleData = {

//     title: "The Power of Habit",

//     author: "Charles Duhigg",

//     publishedDate: "March 1, 2024",

//   };
const ArticleInformation = (articleData) =>{
    return(
        <div>
            <h1>Article Information</h1>
            <p>Title: {articleData.title}</p>
            <p>Author: {articleData.author}</p>
            <p>Published Date: {articleData.publishedDate}</p>
        </div>
    )
}

// 4. Create a React component called ProductDetails to display the following details. .
// Pass the product data object as props.

// const productData = {

//     name: "Smartphone",

//     brand: "Samsung",

//     price: 799.99,

//   };

const ProductDetails = (productData) =>{
    return(
        <div>
            <h1>Product Details</h1>
            <p>Name: {productData.name}</p>
            <p>Brand: {productData.brand}</p>
            <p>Price: {productData.price}</p>
        </div>
    )
}

// 5. Create a React component called EventDetails to display the following details. Pass the event data object as props.

// const eventData = {

//     title: "Tech Conference 2024",

//     location: "San Francisco",

//     date: "April 15, 2024",

//   };

const EventDetails = (eventData) => {
    return(
        <div>
            <h1>Event Details</h1>
            <p>Title: {eventData.title}</p>
            <p>Location: {eventData.location}</p>
            <p>Date: {eventData.date}</p>
        </div>
    )
}

// 6. Create a React component called UserProfile to display the name and avatar image. 
// Pass the name and avatar URL as props.

const UserProfile = (avatar) =>{
    return(
        <div>
            <h1>User Profile</h1>
            <img src={avatar.img} alt={avatar.alt} />
        </div>
    )
}

export default function App(){
    return(
        <>
        <WelcomeMessage name = "Emily!" />
        <BookDetails title = "To Kill a Mockingbird" author = "Harper Lee"  genre = "Classic" />
        <ArticleInformation title = "The Power of Habit" author = "Charles Duhigg" publishedDate = "March 1, 2024" />
        <ProductDetails name = "Smartphone" brand = "Sumsung" price = {799.99} />
        <EventDetails title = "Tech Conference 2024" location = "San Francisco" date = "April 15, 2024" />
        <UserProfile img = "https://via.placeholder.com/150" alt = "placehold" />
        </>
    )
}
