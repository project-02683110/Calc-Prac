function DatetoDay(date) {
    var DateData = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    return DateData.join("/");
}