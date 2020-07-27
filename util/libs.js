export const checkValuesInObject = (object) => {

        console.log(object);
        const newObject = {...object};
        for (const property in newObject) {
            console.log(`${property}: ${newObject[property]}`);
            if (newObject[property] === undefined || newObject[property] === 'undefined' || typeof(newObject[property]) === undefined) {
                console.log('Found');
                newObject[property] = '';
            }
            console.log(`${property}: ${newObject[property]}`);            
        }
        console.log(newObject);
        return newObject;

}

export const sortByDate = (a, b) => {

        const dt1 = new Date(a['date'] + ' ' + a['time']);
        const dt2 = new Date(b['date'] + ' ' + b['time']);

        if (dt1.getTime() > dt2.getTime()) return 1;
        if (dt2.getTime() > dt1.getTime()) return -1;
      
        return 0;
}

export const sortByDateReminders = (a, b) => {

        let dateArr = a.date.split('/');
        const date1 = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];

        dateArr = b.date.split('/');
        const date2 = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];

        const dt1 = new Date(date1);
        const dt2 = new Date(date2);

        if (dt1.getTime() > dt2.getTime()) return 1;
        if (dt2.getTime() > dt1.getTime()) return -1;
      
        return 0;
}

export const sortByDateShort = (a, b) => {

            var val1 = a['date'];
            var val2 = b['date'];
      
            if (val1 > val2) return -1;
            if (val1 < val2) return 1;
            return 0;
}

function getPartOfString(str, len) {
        return str.length > len ? str.substring(0, len) + '...' : str;
}

export const getProductTitle = (booking) => {
        if (booking['fullProductName']) {
          return getPartOfString(
              `${booking['fullProductName'][0].toUpperCase()}${booking['fullProductName'].substring(1)}`,
              22);
        }
    
        return getPartOfString(
            `${booking['productName'][0].toUpperCase()}${booking['productName'].substring(1)}`,
            22);
}

function nth(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

export const getFormattedDateTime = (date, time, useTime = true) => {
    const dateArr = date.split('/');
    date = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];

    const dt = new Date(date + ' ' + time);

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dt.getMonth()];
    
    return days[ dt.getDay() ] + ', ' + dt.getDate() + nth(dt.getDate()) + ' ' + month + (useTime ? ' at ' + time : '');
    
}

export const showDate = (booking) => {
        return getFormattedDateTime(
            booking['date'], booking['time']);
}

export const convertDateToString = (date) => {
    if (date) {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
        date = new Date(date);
      }          
      const year = date.getFullYear();
      const month = "0" + (+date.getMonth() + 1);
      const day = "0" + date.getDate();
      return day.substr(-2) + '/' + month.substr(-2) + '/' + year;
    }
    return date;
}

export const convertTimeToString = (time) => {
    const date = new Date(time);
    let hr = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }
    let ampm = 'AM';
    if ( hr > 12 ) {
      hr -= 12;
      ampm = 'PM';
    }
    if ( hr < 10 ) {
      hr = '0' + hr;
    }
    return hr + ':' + min + ' ' + ampm;
}

export const getFieldTitle = (index, categoryType) => {
    let title = '';
    const household = ['Brand', 'Product name', 'Model'];
    const pets = ['Name', 'Date of Birth', 'Age', 'Breed'];
    const vehicles = ['Make', 'Model', 'Number plate', 'Year', 'VIN'];
    if (!categoryType || categoryType === 'Household') {
      title = household[index];
    } else if (categoryType === 'Pets') {
      title = pets[index];
    } else {
      title = vehicles[index];
    }
    return title;
}

export const getDetailsTitle = (maincategory) => {
        if (maincategory === '' || maincategory === 'Household') {
          return "Product details";
        } else if (maincategory === 'Pets') {
          return "Pet details";
        } else {
          return "Vehicle details";
        }
}

export const convertStringToTime = (date, time) => {
    const dateParts = date.split('/');
    const newTime = time.replace(' PM', '').replace(' AM', '');
    const timeParts = newTime.split(':');
    let hour = +timeParts[0];
    if (time.indexOf('PM') !== -1) {
        hour += 12;
    }
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0], hour, +timeParts[1], 0);
}

function addZero(hr) {
    if ( +hr < 10 ) {
      hr = '0' + hr;
    }
    return '' + hr;
}

export const convertDateTimeToString = (date, time) => {
    const dateParts = date.split('/');
    const newTime = time.replace(' PM', '').replace(' AM', '');
    const timeParts = newTime.split(':');
    let hour = +timeParts[0];
    if (time.indexOf('PM') !== -1) {
        hour += 12;
    }
    return dateParts[2] + '-' + addZero(dateParts[1]) + '-' + addZero(dateParts[0]) + 'T' + addZero(hour) + ':' + addZero(timeParts[1]) + ':00';
}

export const convertStringToDate = (date) => {
    const dateParts = date.split('/');
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

export const isEmail = (email) => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(emailRegEx)) return true;
        else return false;
};

export const getDatesDiff = (date, time) => {
        if (date) {
          let difference =(Date.now() - convertStringToTime(date, time).getTime()) / 1000;
          difference /= 60;
          return Math.round(difference);
        }
        return 0;
}

export const getNewDate = (date, type) => {
        const newDate = new Date(date);

        if (type === 'Weekly') {
            newDate.setDate(date.getDate() + 7);
          }
          if (type === 'Fortnightly') {
            newDate.setDate(date.getDate() + 14);            
          }
          if (type === 'Monthly') {
            newDate.setDate(date.getDate() + 31);            
          }
          if (type === 'Annually') {
            newDate.setDate(date.getDate() + 365);            
          }
          return Date.UTC(+newDate.getFullYear(), +newDate.getMonth(), +newDate.getDate());
}

export const inStorage = (imageURL) => {
        return imageURL.indexOf('https://firebasestorage.googleapis.com') !== -1;
}  

export const baseName = (str) => {
   var base = str.substring(str.lastIndexOf('/') + 1); 
   if(base.lastIndexOf(".") != -1)       
        base = base.substring(0, base.lastIndexOf("."));
   return base;
}

export const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
}    
