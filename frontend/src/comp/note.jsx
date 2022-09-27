import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export function Note() {

    const navigate = useNavigate();
    const editorRef = useRef(null)
    let params = useParams();

    const [note, setNote] = useState([]);
    const [noteId, setNoteId] = useState(0);
    const [change, setChange] = useState(false);

    useEffect(() => {
        let ls = localStorage.getItem("notes");
        setNote(JSON.parse(ls))
        setNoteId(+params.id);
    }, []);


    function changeDoc() {
        setChange(true);
    }
    function back() {
        navigate("/user");
    }
    //////////////////// uppdatera inlägg ///////////////////////

    function save() {
        setChange(false)

        let newText = {
            id: noteId,
            text: editorRef.current.getContent(),
        }

        axios.post("http://localhost:3000/users/update", newText)
            .then(response => { navigate("/user") })
    }


    /////////////////// radera inlägg ///////////////////////

    function deleteBtn() {

        axios.delete("http://localhost:3000/users/" + noteId)
            .then(response => {
                navigate("/user")
            })
    }

    let showNote = note.map((note) => {
        let localS = JSON.parse(localStorage.getItem("notes") || "");
        for (let i = 0; i < localS.length; i++) {
            if (noteId === note.id) {
                return (
                    <>
                        <><section key={note.id}>
                            <h1>{note.title} </h1>
                            <p dangerouslySetInnerHTML={{ __html: note.text }}></p>
                            <button onClick={changeDoc}>Edit</button>
                            <button onClick={deleteBtn}>Delete note</button>
                            <button onClick={back}>Go back</button>
                        </section></>


                        {change && (
                            <article>

                                <Editor
                                    apiKey="6hqytudlu870wzja968yokx4myr1nzyi3rr9f1424qxxbdp2"
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    initialValue={note.text}
                                    init={{
                                        height: 200,
                                        menubar: false,
                                        plugins: [
                                            "advlist",
                                            "autolink",
                                            "lists",
                                            "link",
                                            "image",
                                            "charmap",
                                            "preview",
                                            "anchor",
                                            "searchreplace",
                                            "visualblocks",
                                            "code",
                                            "fullscreen",
                                            "insertdatetime",
                                            "media",
                                            "table",
                                            "code",
                                            "help",
                                            "wordcount",
                                        ],

                                        toolbar:
                                            "undo redo | blocks | " +
                                            "bold italic forecolor | alignleft aligncenter " +
                                            "alignright alignjustify | bullist numlist outdent indent | " +
                                            "removeformat | help",
                                        content_style:
                                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                    }}
                                />
                                <button onClick={save}>Save note</button>
                            </article>
                        )}
                    </>
                );
            }
        }
    });

    return <>{showNote}</>;
}
