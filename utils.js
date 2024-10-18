export const createClickCounter = (maxClicks) => {
    let count = 0;
    return () => {
        if (count < maxClicks) {
            count++;
            console.log(`Натиснень: ${count}, Залишилось натискань: ${maxClicks - count}`);
            return true;
        } else {
            console.log("Максимальна кількість натискань досягнута.");
            return false;
        }
    };
};

export const random = (num) => Math.ceil(Math.random() * num);

export const addLog = (log, $logs) => {
    const logEntry = document.createElement('p');
    logEntry.innerText = log;
    $logs.prepend(logEntry);
};






