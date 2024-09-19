'use server';

export default async function get_all_data() {
    const response = await fetch('https://billions-api.nomadcoders.workers.dev/');
    return await response.json();
}
