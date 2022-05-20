export function calculateCalendar(
    previousMonth,
    nextMonth,
    currentMonth,
    monthData
) {
    const prevDate = previousMonth.getDate();
    const prevDay = previousMonth.getDay();
    const nextDate = nextMonth.getDate();
    const nextDay = nextMonth.getDay();

    const calendar = [];
    let dayCount = 0;
    let i;

    // 지난 달 컴포넌트를 배열에 삽입하는 반복문
    for (i = checkSunday(prevDate, prevDay); i <= prevDate; i++) {
        calendar.push({
            year: previousMonth.getFullYear(),
            month: previousMonth.getMonth(),
            date: i,
            day: dayCount,
            state: 'previous',
        });
        dayCount = checkWeekend(dayCount);
    }

    // 이번 달 컴포넌트를 배열에 삽입하는 반복문
    for (i = 1; i <= nextDate; i++) {
        const article = monthData[String(i).padStart(2, '0')];
        let information = {
            year: currentMonth.getFullYear(),
            month: currentMonth.getMonth(),
            date: i,
            day: dayCount,
            state: 'current',
        };
        if (article) {
            information = { ...information, article };
        }
        calendar.push(information);
        dayCount = checkWeekend(dayCount);
    }

    // 다음 달 컴포넌트를 배열에 삽입하는 반복문
    for (i = 1; i <= 6 - nextDay; i++) {
        calendar.push({
            year: nextMonth.getFullYear(),
            month: nextMonth.getMonth() + 1,
            date: i,
            day: dayCount,
            state: 'next',
        });
        dayCount = checkWeekend(dayCount);
    }

    return calendar;
}

function checkWeekend(dayCount) {
    return dayCount === 6 ? 0 : dayCount + 1;
}

function checkSunday(prevDate, prevDay) {
    if (prevDate === 30 && prevDay === 6) {
        return prevDate + 1;
    } else {
        return prevDate - prevDay;
    }
}

/**
 * 현재 날짜와 같은 날이면 'now'를 반환하는 함수 */
export function isNowDate({ year, month, date }) {
    const nowDate = new Date();
    if (
        year === nowDate.getFullYear() &&
        month === nowDate.getMonth() &&
        date === nowDate.getDate()
    ) {
        return 'now';
    }
    return '';
}

/**
 * 해당 날짜의 detailpage URL을 문자열로 반환하는 함수
 * */
export function getRouteString(year, month, date) {
    return `/detailpage/${
        String(year) +
        String(month + 1).padStart(2, '0') +
        String(date).padStart(2, '0')
    }`;
}
