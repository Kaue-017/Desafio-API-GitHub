import { baseUrl, defaultQuantity } from "../variables.js";

async function getRepositorie(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${defaultQuantity}`);
    return await response.json();
}

export { getRepositorie };