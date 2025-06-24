import { baseUrl, repositorieQuantity } from "/src/scripts/variables.js";

async function getRepositorie(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositorieQuantity}`);
    return await response.json();
}

export { getRepositorie };