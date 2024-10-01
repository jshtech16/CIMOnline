export const getLocation = async () => {
    return await fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => { return data; })
}