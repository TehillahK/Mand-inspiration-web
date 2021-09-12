import {getBooks} from "../../logic/AccessBooks";
import {Link} from "react-router-dom";

function BookCard(props) {
    const book=props.book;
    const cover =book.coverPic;
    return(
        <div className={"menu-card"}>
            <div className={"card-text"}>
               <h2>{book.name}</h2>
                <p>{book.description}</p>
                <div className={"buttons"}>
                    <a className={"blue-button"} href={book.amazonLink}>Amazon</a>
                    <a className={"blue-button"} href={book.etsyLink}>Etsy</a>
                </div>
            </div>
            <img src={cover} />
        </div>
    )
}
const BookList = () => {
    console.log(getBooks())
    const  books = getBooks();
    return(
        <div>
            {
                books.map(
                    (book)=><BookCard key={book.id} book={book} />
                )
            }
        </div>
    )
}


export default BookList;
