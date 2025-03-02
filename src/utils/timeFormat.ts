import moment from 'moment';

export function getFormattedTime(time: Date) {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a')
}

