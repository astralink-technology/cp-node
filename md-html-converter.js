var markx = require('markx');

markx({
    input: 'README.md', //can be either a filepath or a source string
    template: 'index.html', //can either be filepath or source string
    highlight: true, //parse code snippets for syntax highlighters, default: true
    data: {} //data that gets passed into template
}, function(err, html) {
});