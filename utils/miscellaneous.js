export const toTimeString = (dateValue) => {
    const date = new Date(dateValue);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const endDate = dateValue === 0 ? "-" : date.toLocaleDateString('tr-TR', options);
    return endDate;
};