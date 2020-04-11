const editDate = date => {
    let arrayDate = date.split(':')
    let tDate = arrayDate[0].split('T')
    let traceDate = tDate[0].split('-')
    let invertDate = traceDate[2] + "/" + traceDate[1] + "/" + traceDate[0]

    return invertDate
}

export default editDate