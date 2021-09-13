import BookList from "../components/BookList";
import GeneralBanner from "../components/GeneralBanner";

const Books = () => {
    return(
        <main className={"container"}>
            <GeneralBanner section={'Portfolio'} title={'Our Books'} text={'Here is a showcase of all the works published by Mandi Inspiration.'} />
            <BookList />
        </main>
    )
}
export default Books;
