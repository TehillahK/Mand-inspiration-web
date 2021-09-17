import BookList from "../components/BookList";
import GeneralBanner from "../components/GeneralBanner";
import BookConsultation from "../components/BookConsultation";
import {useEffect, useMemo, useState} from "react";
import {getBooks} from "../../logic/AccessBooks";

const Books = () => {
    const [books ,setBooks]=useState([]);
    useEffect((factory, deps) => {
        async function retrieveBooks(){
            try{
                const result =  getBooks();
                result.then(
                    function (data) {
                        setBooks(data)
                    }
                )

            }
            catch (e) {
                console.log("failed to get students")
            }
        }
        retrieveBooks().then(r => console.log("success"))
    }, []);
    return (
        <main className={"container"}>
            <GeneralBanner
                section={"Portfolio"}
                title={"Our Books"}
                text={
                    "Here is a showcase of all the works published by Mandi Inspiration."
                }
            />
            <BookList books={books} />
            <BookConsultation />
        </main>
    );
};
export default Books;
