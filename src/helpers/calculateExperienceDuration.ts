const calculateExperienceDuration = (
    startDateStr: string,
    endDateStr: string
) => {
    const startDate = new Date(startDateStr);
    const endDate =
        endDateStr.toLowerCase() === 'present'
            ? new Date()
            : new Date(endDateStr);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (endDate.getDate() >= startDate.getDate()) {
        months++;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let result = '';
    if (years > 0) {
        result += `${years} ${years > 1 ? 'yrs' : 'yr'} `;
    }
    if (months > 0) {
        result += `${months} ${months > 1 ? 'mos' : 'mo'}`;
    }
    return result.trim();
};

export default calculateExperienceDuration;
