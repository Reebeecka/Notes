const express = require("express");
const router = express.Router();


router.get("/:userName", function (req, res) {

    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let sql = "SELECT * FROM notes WHERE author IN ('"+ req.params.userName +"')"

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

/* Add new documents */
router.post("/", function (req, res) {
 
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let note = {...req.body}

        let sql = "INSERT INTO notes (title, text, author) VALUES ('"+ note.title +"','"+ note.text +"','"+ note.author +"')";

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

// update a note
router.post("/update", function (req, res) {

	req.app.locals.con.connect(function (err) {
		if (err) {
			console.log(err);
		}
		let note = { ...req.body }

		let sql = "UPDATE notes SET text='" + note.text + "' WHERE id='" + note.id + "'";

		console.log(sql);

		req.app.locals.con.query(sql, function (err, result) {
			if (err) {
				console.log(err);
			}

			res.json(result)
		})
	})
})

router.delete("/:id", function (req, res) {
 
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sql = `DELETE FROM notes WHERE id=${req.params.id};`;

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

module.exports = router;