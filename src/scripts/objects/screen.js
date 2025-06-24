const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
          <img src="${user.avatarUrl}" alt="Foto de perfil do Usuario"/>
          <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado!"}</h1>
            <p>${user.bio ?? "Não possui bio cadastrada!"}</p>
           </div>
          </div>
          <div class="user-connections">
                    <div class="followers">
                        <h3><i class="fa-solid fa-user"></i>  Seguidores</h3>
                        <p>${user.followers}</p>
                    </div>
                    <div class="following">
                        <h3><i class="fa-solid fa-user"></i>  Seguindo</h3>
                        <p>${user.following}</p>
                    </div>
                </div>`;

        let repositorieItens = ''
        user.repositories.forEach(repo => {
            repositorieItens +=
           `<li>
             <a href="${repo.html_url}" target="_blank">${repo.name}<br>
              <div class="repo-stats"><span>🍴${repo.forks}</span> <span>⭐${repo.stargazers_count}</span> <span>👀${repo.watchers}</span> <span>🌐${repo.language}</span>
              </div>
             </a>
            </li>`;
            console.log(repo)
        })
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories section">
            <h2>Repositorios</h2>
            <ul>${repositorieItens}</ul>
        </div>`;
        }

        let eventItens = ''
        user.events.forEach(event => {
            const commits = event.payload?.commits;
            if (commits?.length > 0) {
                eventItens += `<li>${event.repo.name}<span> - ${event.payload.commits[0].message}</span></li>`
            } else if (commits?.length == 0 || event.type === 'CreateEvent') {
                eventItens += `<li>${event.repo.name}<span> - Sem mensagem de commit</span></li>`
            }
        })
        if (user.events.length === 0) {
            eventItens += `<li>Este usuario não tem nenhum evento recente</li>`
        }
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="events">
            <h2>Eventos</h2>
            <ul>${eventItens}</ul>
        </div>`;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen };