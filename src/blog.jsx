import './App.css'

const Header = () =>{
    return(
        <header>
            <h1>Welcome to Our Blog</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="home">About</a>

                    </li>
                    <li>
                        <a href="home">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const BlogDetail = ({blog}) =>{
    return(
        <div>
            <h1>The Importance of Learning React</h1>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
        </div>
    )
}

const Footer = () =>{
    return(
        <footer>
            <p>&copy; 2024 Our Blog. All rights reserved</p>
        </footer>
    )
}
export default function App(){
    const blogDetails = {
        author: "Jane Doe",
        date: "March 1, 2024",
    }
    return(
        <>
        <main>
            <Header />
            <BlogDetail blog={blogDetails} />
        </main>
        <Footer />
        </>
    )
}