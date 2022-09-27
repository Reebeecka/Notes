import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddNote() {

    const navigate = useNavigate();
    const editorRef = useRef(null);
    const [user, setUser] = useState({ title: "" });

    function handletitle(e) {
        let name = e.target.name;
        let uppdate = { ...user, [name]: e.target.value };
        setUser(uppdate);
    }

    ///////////////////// Spara i listan och skicka med //////////
    function save() {
        let ls = localStorage.getItem("user");
        let username = JSON.parse(ls);

        let newNote = {
            title: user.title,
            text: editorRef.current.getContent(),
            author: username.username
        };

        axios
            .post("http://localhost:3000/users", newNote)
            .then((response) => {
                navigate("/user");
            });
    }

    return (
        <> <article>
            Header: <input type="text"
                name="title"
                value={user.title}
                onChange={handletitle}
            />
            <Editor
                apiKey="6hqytudlu870wzja968yokx4myr1nzyi3rr9f1424qxxbdp2"
                onInit={(evt, editor) => (editorRef.current = editor)}
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

            <button onClick={save}>Save</button>
        </article>
        </>
    );
}
