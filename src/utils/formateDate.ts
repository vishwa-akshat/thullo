export const DayMonthYear = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return formattedDate.format(date);
};
