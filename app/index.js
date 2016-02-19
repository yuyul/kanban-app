/**
 * Created by jcaro on 19/02/2016.
 */
var component = require('./component');
var app = document.createElement('div');
require('./main.css');

document.body.appendChild(app);

app.appendChild(component());