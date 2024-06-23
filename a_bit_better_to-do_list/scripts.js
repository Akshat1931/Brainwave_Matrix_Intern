function addTask() {
    let taskInput = document.getElementById('task');
    let prioritySelect = document.getElementById('priority');
    let task = taskInput.value.trim();
    let priority = prioritySelect.value;

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    let list = document.getElementById(priority);
    let listItem = document.createElement('li');
    listItem.textContent = task;

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        list.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    list.appendChild(listItem);

    taskInput.value = '';
}

let timer;
let pomodoroTime = 25 * 60;
let remainingTime = pomodoroTime;

function startPomodoro() {
    if (timer) return;

    timer = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();

        if (remainingTime <= 0) {
            clearInterval(timer);
            timer = null;
            remainingTime = pomodoroTime;
            alert('Pomodoro session complete! Take a break.');
        }
    }, 1000);
}

function resetPomodoro() {
    clearInterval(timer);
    timer = null;
    remainingTime = pomodoroTime;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
