import "../css/mainpage.css"

export default function MpSecOne(props) {

    return (
        <>
            <div className="main-page-first-section">
                <div className="title-container">
                    <h1 id="web-title">BookWise</h1>
                    <h4 id="web-slogan">Read It, List It, Learn It!</h4>
                </div>
                <div className="submit-container">
                    <form className="form-submission" onSubmit={props.onSubmit}>
                        <input type="text" id="user-book-input" name="bookName" placeholder="Enter your book name"/>
                        <br />
                        <button id="user-add">Add</button>
                    </form>
                    <p id="made-by-section">Made by Muelvin Lopez</p>
                </div>
            </div>
        </>
    )
}