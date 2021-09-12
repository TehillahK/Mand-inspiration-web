import BookList from "../components/BookList";
import BookBanner from "../components/BookBanner";

const Books = () => {
    return(
        <main className={"container"}>
            <BookBanner />
            <BookList />
        </main>
    )
}
export default Books;
