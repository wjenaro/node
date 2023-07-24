import express from 'express';
const app = express();
const PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');

// Without middleware
app.get('/user', function (req, res) {
    const myname="Jenaro";

	// Rendering home.ejs page
	res.render('views.ejs',{
        name: myname
    });
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
