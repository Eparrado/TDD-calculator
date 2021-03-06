const express = require('express');
const app = express();

// CONFIGURATION:
app.use(express.static('src'));
app.set('view engine', 'pug');
app.set('views', 'views');

// ROUTES:
app.get('/', (req, res) => {
    res.render('index');
});


// START APP
app.listen(3000, () => console.log('Example app listening on port 3000!'))