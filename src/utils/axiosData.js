import axios from "axios"

export const axiosData = async (url, data) => {
    const result = await axios.post('https://expenses.cimonline.eu/' + url,
        data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    console.log(result.data)
    return result.data
}

export const axiosUploadData = async (url, data) => {
    const res = await axios.post('https://expenses.cimonline.eu/' + url,
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
    return res;
}