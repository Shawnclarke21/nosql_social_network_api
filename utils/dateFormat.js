const addDateSuffix = (date) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const digit = date % 100;
  
    return date + (suffixes[(digit - 20) % 10] || suffixes[digit] || suffixes[0]);
  };
  
  const formatDate = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
    const months = [
      monthLength === 'short' ? 'Jan' : 'January',
      monthLength === 'short' ? 'Feb' : 'February',
      monthLength === 'short' ? 'Mar' : 'March',
      monthLength === 'short' ? 'Apr' : 'April',
      monthLength === 'short' ? 'May' : 'May',
      monthLength === 'short' ? 'Jun' : 'June',
      monthLength === 'short' ? 'Jul' : 'July',
      monthLength === 'short' ? 'Aug' : 'August',
      monthLength === 'short' ? 'Sep' : 'September',
      monthLength === 'short' ? 'Oct' : 'October',
      monthLength === 'short' ? 'Nov' : 'November',
      monthLength === 'short' ? 'Dec' : 'December',
    ];
  
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
    const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
    const year = dateObj.getFullYear();
    let hour = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
    hour = hour === 0 ? 12 : hour;
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
    return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  };
  
  module.exports = formatDate;