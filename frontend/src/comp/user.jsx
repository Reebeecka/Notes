import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function User() {

    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);


    useEffect(() => {
        let ls = localStorage.getItem("user");
        if (ls) {
            let user = JSON.parse(ls);
            axios
                .get("http://localhost:3000/users/" + user.username)
                .then((response) => {
                    setNotes(response.data);
                    localStorage.setItem("notes", JSON.stringify(response.data));
                });
        }
    }, []);


    ///////////// skriv ut listan /////////////////////

    let list = notes.map((note) => {
        let noteLink = `/user/${note.id}`;
        return (
            <li key={note.id}>
                <Link to={noteLink}>{note.title}</Link>
                <p dangerouslySetInnerHTML={{ __html: note.text }}></p>
            </li>
        );
    });

    function addToList() {
        navigate("/user/addnote");
    }
    return (
        <>
            <section>
                <button onClick={addToList}>Create new note</button>
                <h2>All notes, click on title to make changes</h2>
                <ul>{list}</ul>
            </section>
        </>
    );
}
