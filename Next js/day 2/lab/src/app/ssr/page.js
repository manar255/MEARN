
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: "no-cache", 
    });
    return res.json();
}

export default async function Component() {
    const data = await getData();

    return <div>
        {
            data.map(u=>(
                <div>{u.name}</div>
            ))
        }
    </div>;
}