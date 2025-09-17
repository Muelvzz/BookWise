import "../css/mainpage.css"
import MpSecTwo from "./MpSecTwo"
import React from 'react'

export default function MpSecOne() {

    const [books, setBooks] = React.useState([])

    const bookListItems = books.map(book => (
        <li key={book}>{book}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const bookName = formData.get("bookName")
        
        let newBook = bookName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

        setBooks(prevBooks => [...prevBooks, newBook])

        let inputEl = document.getElementById("user-book-input")

        console.log(`${bookName} is added in the list`)
        inputEl.value = ""
    }

    return (
        <>
            <div className="main-page-first-section">
                <div className="title-container">
                    <h1 id="web-title">BookWise</h1>
                    <h4 id="web-slogan">Read It, List It, Learn It!</h4>
                </div>
                <div className="submit-container">
                    <form className="form-submission" onSubmit={handleSubmit}>
                        <input type="text" id="user-book-input" name="bookName" placeholder="Enter your book name"/>
                        <br />
                        <button id="user-add">Add</button>
                    </form>
                    <p id="made-by-section">Made by Muelvin Lopez</p>
                </div>
            </div>
            <MpSecTwo bookData = {bookListItems} />
        </>
    )
}