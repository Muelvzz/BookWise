import React from 'react'
import "../css/mainpage.css"
import MpSecOne from "./MpSecOne"
import MpSecTwo from "./MpSecTwo"
import BookFacts from "./BookFacts"

export default function MainPage() {

    const [books, setBooks] = React.useState([])
    const [submitToggle, setSubmitToggle] = React.useState(false)

    const handleButtonSubmit = () => {
        setSubmitToggle((prevState) => !prevState)
        console.log("Button is pressed...")
    }

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
            <article className="main-page">
                <MpSecOne
                    onSubmit = {handleSubmit}
                    submitValue={submitToggle}
                />
                <MpSecTwo 
                    bookData = {bookListItems}
                    onButtonSubmit={handleButtonSubmit}
                />
            </article>
                <BookFacts
                    bookLists = {books}
                    state = {submitToggle}
                />
        </>
    )
}