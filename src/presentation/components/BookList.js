import {getBooks} from "../../logic/AccessBooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon,faEtsy } from '@fortawesome/free-brands-svg-icons'


function BookCard(props) {
    const book=props.book;
    const cover =book.coverPic;

    const openBookPage = (link) => {
        window.open(link)
    }

    return(
        <div className={"menu-card"}>
            <div className={"card-text"}>
               <h2>{book.name}</h2>
                <p>{book.description}</p>
                <div className={"buttons"}>

                    <button className={"blue-button"} onClick={
                        ()=>{
                            openBookPage(book.amazonLink)
                        }

                    }>
                        <FontAwesomeIcon icon={faAmazon}/>
                        Amazon
                    </button>
                    <button className={"blue-button"}
                       onClick={ ()=>{
                           openBookPage(book.etsyLink)
                        }
                       }
                    >
                        <FontAwesomeIcon icon={faEtsy}/>
                         Etsy
                    </button>
                </div>
            </div>
            <img src={cover} alt={''} />
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
