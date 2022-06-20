export const getDate = (date) => {
    const newDate = new Date(date)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()

    if (month < 10) {
        return (`${day}-0${month}-${year}`)
    } else {
        return (`${day}-${month}-${year}`)
    }
}