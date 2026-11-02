import './App.css'

// 1. Create a React component called WelcomeBanner to display the message "Welcome to My Recipe App!". 
// Pass the app name, My Recipe as props.

const WelcomeBanner = (props) =>{
    return(
        <h1>Welcome to {props.name}</h1>
    )
}

// 2. Create a React component called RecipeDetails to display the following details. Pass the recipe data object as props.

// const recipeData = {

//     title: "Chocolate Cake",

//     author: "Baker Betty",

//     rating: 4.7,

//   };

const RecipeDetails = (recipeData) =>{
    return(
        <div>
            <h1>Recipe Details</h1>
            <p>Title: {recipeData.title}</p>
            <p>Author: {recipeData.author}</p>
            <p>Rating: {recipeData.rating}</p>
        </div>
    )
}
// 3. Create a React component called MovieInformation to display the following details. Pass the movie data object as props.

// const movieData = {

//     title: "The Godfather",

//     director: "Francis Ford Coppola",

//     releaseDate: "March 24, 1972",

//   };

const MovieInformation = (movieData) =>{
    return(
        <div>
            <h1>Movie Details</h1>
            <p>Title: {movieData.title}</p>
            <p>Director: {movieData.director}</p>
            <p>releaseDate: {movieData.releaseDate}</p>
        </div>
    )
}

// 4. Create a React component called ProductFeatures to display the following details. Pass the product data object as props.

// const productData = {

//     name: "Smartwatch",

//     color: "Black",

//     size: "Medium",

//   };

const ProductFeatures = (productData) =>{
    return(
        <div>
            <h1>Product Feature</h1>
            <p>Name: {productData.name}</p>
            <p>Color: {productData.color}</p>
            <p>Size: {productData.size}</p>
        </div>
    )
}

// 5. Create a React component called UserProfileCard to display the name, 
// email and role of user. Pass the name, email and role as props.

const UserProfileCard = (userInfo) => {
    return(
        <div>
            <h1>User Information</h1>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Role: {userInfo.role}</p>
        </div>
    )
}

export default function App(){
    return(
        <>
        <WelcomeBanner name = "My Recipe App!" />
        <RecipeDetails title = "Chocolate Cake" author = "Baker Betty" rating = {4.7} />
        <MovieInformation title = "The Godfather" director = "Francis Ford Coppola" releaseDate = "March 24, 1972"/>
        <ProductFeatures name= "Smartwatch" color = "Black" size = "Medium"/>
        <UserProfileCard name = "Alice" email = "alice@example.com" role = "Admin" />
        </>
    )
}