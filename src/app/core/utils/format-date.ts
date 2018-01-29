export function toIsoString(date:Date){
    return date.getFullYear()+"-"+ pad(date.getMonth()+1,2)+ "-" + pad(date.getDate(),2);
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}