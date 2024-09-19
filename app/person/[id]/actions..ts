'use server';
export default async function get_one_data(person: string) {
    const data = await fetch(`https://billions-api.nomadcoders.workers.dev/person/${person}`);
    return data.json();
}
