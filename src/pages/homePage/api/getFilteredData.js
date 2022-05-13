import axios from 'axios';

export async function getFilteredData(currentDate) {
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1);
    const URI = `http://localhost:5030/home/${year}-${month.padStart(2, '0')}`;

    try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(URI);
        const resultData = await response.data.reduce(filterFunction, {});
        return resultData;
    } catch (err) {
        console.log(err);
        return [];
    }
}

function filterFunction(acc, responsedData) {
    const date = responsedData.date.replace(/\-/g, '').slice(6, 8);
    const filteredData = {
        like: responsedData.like,
        title: responsedData.title,
        imgurl: responsedData.imgurl,
    };
    const dataArray = acc[date] ? acc[date] : [];
    dataArray.push(filteredData);
    acc[date] = dataArray;
    return acc;
}
