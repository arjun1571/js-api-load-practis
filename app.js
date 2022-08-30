function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showUser(data))
}


function showUser(data){
    // console.log(data);

    const ul = document.getElementById("loand-li");

    for (const user of data) {
        const li = document.createElement("li");
        li.innerText=`user Name: ${user.name}
        email: ${user.email}
        `;
        li.style.borderStyle = "solid"
        li.style.padding = "50px 10px 20px 30px"
        li.style.marginBottom = "20px"
        ul.appendChild(li);
    }

}