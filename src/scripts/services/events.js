import { baseUrl, defaultQuantity } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${defaultQuantity}`);
    return await response.json();
}

export { getEvents };