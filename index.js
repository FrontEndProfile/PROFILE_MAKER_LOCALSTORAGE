function userGetData() {
        let email_vale = document.getElementById("email_input").value;
        let pass_vale = document.getElementById("password_input").value;
        let name_vale = document.getElementById("name_input").value;
        let city_vale = document.getElementById("city_input").value;
        let message_vale = document.getElementById("message").value;
        // console.log( email_vale  );

        const userData = {
            email: email_vale,
            pass: pass_vale,
            city: city_vale,
            name: name_vale,
            message: message_vale
        }
        window.localStorage.setItem('userList', JSON.stringify(userData));
}
let local = JSON.parse(localStorage.getItem("userList"));
// console.log(local.email);
const name_render = local.name
const city_render = local.city
const email_render = local.email
const pass_render = local.pass
const mess_render = local.message
document.querySelector('.card-title').innerHTML = name_render
document.querySelector('.card-subtitle').innerHTML = city_render
document.querySelector('.mail').innerHTML = email_render
document.querySelector('.card-text').innerHTML = mess_render