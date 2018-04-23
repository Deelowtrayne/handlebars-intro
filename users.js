document.addEventListener('DOMContentLoaded', function(){
    // get a reference to the template script tag
    let templateSource = document.querySelector(".userTemplate").innerHTML;
    // compile the template
     var userTemplate = Handlebars.compile(templateSource);
    // pass the data into the template & get the HTML back
    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // compile the template
    userDataElem.innerHTML = userTemplate({
        username : 'deelowtrayne',
        firstName : 'Luvuyo',
        lastName : 'Sono',
        email : 'luvuyosono@gmail.com'
    });
});
