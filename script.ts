class Task {
    public id: number;
    public completed: boolean;

    constructor(public description: string, public dueDate: string) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

class TaskManager {
    public tasks: Task[];
    constructor() {
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
    }
    addTask(description: string, dueDate: string) {
        this.tasks.push(new Task(description, dueDate));
    }
    deleteTask(id: number) {
        let indexTeDelete = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks.splice(indexTeDelete, 1);

    }
    updateTaskDescription(id: number, newDescription: string): void {
        let indexTeUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexTeUpdate].description = newDescription;

    }
    completeTask(id: number): void {
        let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexToUpdate].completed = true;

    }
    undoTaskComplition(id: number): void {
        let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexToUpdate].completed = false;
    }
}

let manager = new TaskManager();

function showTasksInLists() {
    if (manager.tasks.length > 0) {
        document.getElementById("12months")!.innerHTML = "";
        document.getElementById("6months")!.innerHTML = "";
        document.getElementById("3months")!.innerHTML = "";
        document.getElementById("1month")!.innerHTML = "";
        document.getElementById("1week")!.innerHTML = "";
        document.getElementById("theDay")!.innerHTML = "";
        document.getElementById("after")!.innerHTML = "";

        for (let task of manager.tasks) {
            if (task.completed == false) {
                switch (task.dueDate) {
                    case "12months":
                        document.getElementById(
                            "12months"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "6months":
                        document.getElementById(
                            "6months"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "3months":
                        document.getElementById(
                            "3months"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "1month":
                        document.getElementById(
                            "1month"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "1week":
                        document.getElementById(
                            "1week"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "theDay":
                        document.getElementById(
                            "theDay"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    case "after":
                        document.getElementById(
                            "after"
                        )!.innerHTML += `<div> <span class="icon-container"><button class="btn heart" onclick="completeTask(${task.id})"><i class="fa-regular fa-heart"></i></button></span><li class="active-list d-inline-block w-50">${task.description}</li> <span class="icon-container"> <button class="btn edit" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn trash" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
                        break;
                    default:
                        break;
                }
            } else {
                switch (task.dueDate) {
                    case "12months":
                        document.getElementById(
                            "12months"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "6months":
                        document.getElementById(
                            "6months"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "3months":
                        document.getElementById(
                            "3months"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "1month":
                        document.getElementById(
                            "1month"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "1week":
                        document.getElementById(
                            "1week"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "theDay":
                        document.getElementById(
                            "theDay"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                    case "after":
                        document.getElementById(
                            "after"
                        )!.innerHTML += `<div><span class="icon-container"><button class="btn fullHeart" onclick="undoTaskComplition(${task.id})"><i class="fa-solid fa-heart"></i></button></span> <li class="complete-list d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span class="icon-container">
            <button class="btn edit" disabled><i class="fa-solid fa-pen"></i></button>
            <button class="btn trash" disabled><i class="fa-solid fa-trash"></i></button></span>
            </div> `;
                        break;
                }
            }
        }
    } else {
        manager.addTask("Settle on a budget", "12months");
        manager.addTask("Start creating guest list", "12months");
        manager.addTask("Choose 2-3 potential dates", "12months");
        manager.addTask("Finalize a wedding date", "12months");
        manager.addTask("Reserch venues for your wedding", "12months");
        manager.addTask("Sign contract and reserve the venue", "6months");
        manager.addTask("Book photographers", "6months");
        manager.addTask("Book videographers", "6months");
        manager.addTask("Book magnets photographer", "6months");
        manager.addTask("Book DJ", "6months");
        manager.addTask("Book catering", "6months");
        manager.addTask("Book drinks and alcohol bar", "6months");
        manager.addTask("Book wedding designer", "6months");
        manager.addTask("Book hair artist", "3months");
        manager.addTask("Book makeup artist", "3months");
        manager.addTask("Buy jewelries", "3months");
        manager.addTask("Buy a wedding dress", "3months");
        manager.addTask("Buy shoes", "3months");
        manager.addTask("Buy groom outfit", "3months");
        manager.addTask("design invitations", "3months");
        manager.addTask("Book your celebrant/officiant", "3months");
        manager.addTask("Send invitations", "1month");
        manager.addTask("Finalize menu with caterer", "1month");
        manager.addTask("Decide on a playlist with the DJ", "1month");
        manager.addTask("Buy dancing floor accessories", "1month");
        manager.addTask("Finalize seating arrangements ", "1month");
        manager.addTask("Wedding dress fittings", "1month");
        manager.addTask("Purchase wedding rings", "1month");
        manager.addTask("Arrival confirmations", "1week");
        manager.addTask("Last wedding dress fitting", "1week");
        manager.addTask("Buy extra alcohol", "1week");
        manager.addTask("Buy gummy and sweets", "1week");
        manager.addTask("Make sure you paid to Akum", "theDay");
        manager.addTask("Bring all the suppliers phone numbers", "theDay");
        manager.addTask("Don't forget the wedding rings", "theDay");
        manager.addTask("Bring payment envelopes", "theDay");
        manager.addTask("Bring a bag for all the checks and gifts ", "theDay");
        manager.addTask("Bring charger for your phone ", "theDay");
        manager.addTask("Arange small purse with tuch up kit, plasters, pills, deodorant, perfume, secure pins, dental flos, mint candies and non-stain wipes", "theDay");
        manager.addTask("Bring strawes for drinking", "theDay");
        manager.addTask("Bring sunglasses", "theDay");
        manager.addTask("Bring eye contacts", "theDay");
        manager.addTask("Bring extra pair of shoes", "theDay");
        manager.addTask("Bring spare clothing: dress, shirt, underwear, nightwear", "theDay");
        manager.addTask("Bring Kipa, talit and ktuba", "theDay");
        manager.addTask("Bring your jewelries", "theDay");
        manager.addTask("Bring your veil", "theDay");
        manager.addTask("Deposite the checks", "after");
        manager.addTask("Last supplier payments", "after");
        manager.addTask("Open joint account", "after");
        manager.addTask("HONEYMOON", "after");
        localStorage.setItem("tasks", JSON.stringify(manager.tasks));
        showTasksInLists();
    }
}
showTasksInLists();

function completeTask(id: number) {
    manager.completeTask(id);
    localStorage.setItem('tasks', JSON.stringify(manager.tasks));
    showTasksInLists();
};
function undoTaskComplition(id: number) {
    manager.undoTaskComplition(id);
    localStorage.setItem('tasks', JSON.stringify(manager.tasks));
    showTasksInLists();
};

function deleteTask(id: number) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        localStorage.setItem('tasks', JSON.stringify(manager.tasks));
        showTasksInLists();
    }
}
function updateDescription(id: number) {
    // prompt for new description
    let newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription!);
        localStorage.setItem('tasks', JSON.stringify(manager.tasks));
        showTasksInLists();

    } else alert("Sorry! Something went wrong");
}

function addNewTask() {
    let description = (document.getElementById("description") as HTMLInputElement).value;
    let dueDate = (document.getElementById("dueDate") as HTMLInputElement).value;
    manager.addTask(description, dueDate);
    (document.getElementById("description") as HTMLInputElement).value = "";
    localStorage.setItem('tasks', JSON.stringify(manager.tasks));

    showTasksInLists();
}