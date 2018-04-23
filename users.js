document.addEventListener('DOMContentLoaded', function(){
    // get a reference to the template script tag
    let templateSource = document.querySelector(".userTemplate").innerHTML;
    // compile the template
     var userTemplate = Handlebars.compile(templateSource);
    // pass the data into the template & get the HTML back
    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    var userData = { users: [
        {username: "deelowtrayne", firstName: "Luvuyo", lastName: "Sono", email: "luvuyosono@gmail.com" },
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]};
    // compile the template
    userDataElem.innerHTML = userTemplate(userData);
});
