import fs from "fs";

export function log(content) {
    let path = `logs/${getTodayDate().year}/${getTodayDate().monthName}/${
        getTodayDate().date
    }.log`;
    fs.mkdir(path, { recursice: true }, (err) => {
        if (err) {
            console.error(err);
        }
        fs.appendFile(path, content, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

export function getTodayDate() {
    const today = new Date();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const monthName = monthNames[month - 1];
    const date = today.getDate();

    return {
        date,
        month,
        monthName,
        year,
        date: `${date}-${month}-${year}`,
        dirPath: `/${year}`,
        filePath: `/${year}/${monthName}.csv`,
    };
}
