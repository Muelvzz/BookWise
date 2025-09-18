import "../css/mainpage.css"

export default function MpSecTwo(props) {

    const handleClick = () => {
        const buttonValue = props.bookData;
        props.onButtonSubmit(buttonValue);
    }

    return (
        <>
            <div className="main-page-second-section">

                { 
                    props.bookData.length === 0 
                        && 
                    <div className="sec-two-title-container">
                        <h1>Your book goes here...</h1>
                    </div>
                }

                { 
                    props.bookData.length > 0 
                        && 
                    <div className="sec-two-title-container">
                        <img src="\logo.png" alt="logo" />
                        <h1>BookWise</h1>
                    </div>
                }

                <ul className="book-list">
                    {props.bookData}
                </ul>

                { 
                    props.bookData.length > 0 
                    &&
                  <button id="user-submit" onClick={handleClick} >Submit</button>
                }

            </div>
        </>
    )
}