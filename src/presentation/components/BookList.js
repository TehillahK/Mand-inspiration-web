import { getBooks } from "../../logic/AccessBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faEtsy } from "@fortawesome/free-brands-svg-icons";

function BookCard(props) {
    const book = props.book;
    const cover = book.coverPic;

    const openBookPage = (link) => {
        window.open(link);
    };

    return (
        <div className={"d-flex justify-content-between shadow-lg p-3 mb-5 bg-body rounded "} style={{marginBottom:"1rem"}}>
            <div className={" d-flex flex-column justify-content-center px-2"} style={{width:"512px"}}>
                <h2>{book.name}</h2>
                <p className="text fs-6">{book.description}</p>
                <div className={"buttons"}>
                    <button
                        type="button" 
                        className={"btn btn-primary"}
                        onClick={() => {
                            openBookPage(book.amazonLink);
                        }}
                    >
                        <FontAwesomeIcon icon={faAmazon} />
                        Amazon
                    </button>
                    <button
                        type="button" 
                        className={"ms-1 btn btn-outline-primary"}
                        onClick={() => {
                            openBookPage(book.etsyLink);
                        }}
                    >
                        <FontAwesomeIcon icon={faEtsy} />
                        Etsy
                    </button>
                </div>
            </div>
            <img className="order-md-1" src={cover} alt={""} style={{width:"12.5rem",height:"18.5rem"}} />
        </div>
    );
}
const BookList = (props) => {
    const books = props.books;
    return (
        <div>
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
