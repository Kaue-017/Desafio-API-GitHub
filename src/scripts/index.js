import { getUser } from "./services/user.js";
import { getRepositorie } from "./services/repositorie.js";
import { getEvents } from "./services/events.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validadeInput(userName)) return;
    getUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const EnterKeyPressed = key === 13;

    if (EnterKeyPressed) {
        if (validadeInput(userName)) return;
        getUserData(userName);
    }
})

function validadeInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuario!!');
        return true;
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName);
    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }
    const repositoriesResponse = await getRepositorie(userName);
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    
    const eventsResponse = await getEvents(userName)
    user.setEvents(eventsResponse)
    
    screen.renderUser(user);
}
