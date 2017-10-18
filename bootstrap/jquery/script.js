
var p = document.createElement('p');
p.innerHTML = 'Montext';
var text = document.createTextNode('Mon super text!!!');

//p.appendChild(text);

/* var content = document.getElementById('content');
content.appendChild(p);

var body = document.getElementsByTagName('body');
console.log(body);

body[0].appendChild(text);

var a = new Array([1]);
var b = a;

a[0] = 20;
console.log(b); */

$(document).ready(function () {

    function initialise() {
        $('li:odd').css('background-color', 'white');
        $('li:even').css('background-color', '#c3c3c3')
        $('li.active').css('background-color', 'yellow');
    }
    initialise();

    $('#toggleStyle').on('click', function(){
        $('.test').toggleClass('myClass');
    })

    var text = $('#task');
    text.on('keypress', function (event) {
        if (event.keyCode === 13) {
            console.log(text.val());
            var li = $(document.createElement('li'));
            var i = $(document.createElement('i'));
            i.addClass('pull-right glyphicon glyphicon-trash');
            li.text(text.val());
            li.append(i);

            li.hide().appendTo('#nav').fadeIn();
            initialise();
            text.val('');
        }
    })

    $('ul#nav').on("click", "li", function () {
        //initialise();
        /* $(this).css('background-color', 'red'); */
        var li = $(this);

        if (li.css('background-color') == 'rgb(255.0.0') {
            initialise();
        } else {
            li.css('background-color', 'red');
        }

    })

    $('#nav').on("click", "li i", function () {
        $(this).parent().remove();
        initialise();
    })

});
