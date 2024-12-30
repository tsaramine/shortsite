const button = document.getElementById("btn_menu")
const ul = document.getElementById("ul")

document.getElementById('btn_menu').addEventListener('click', function () {
    button.classList.toggle("active");
    ul.classList.toggle("is-active");
});

const rootElement = document.documentElement;
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    rootElement.classList.toggle('active');
});

function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const resultField = document.getElementById('result');
    const adviceField = document.getElementById('advice');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultField.value = "Veuillez entrer des valeurs valides";
        adviceField.value = "";
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    resultField.value = `Votre IMC: ${imc}`;

    if (imc < 18.5) {
        adviceField.value = "Vous êtes en insuffisance pondérale";
    } else if (imc >= 18.5 && imc < 25) {
        adviceField.value = "Votre poids est normal";
    } else if (imc >= 25 && imc < 30) {
        adviceField.value = "Vous êtes en surpoids";
    } else {
        adviceField.value = "Vous êtes en obésité";
    }
}

console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠤⠖⠒⠒⠒⣲⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠖⠋⠉⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣦⡈⠉⠓⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣦⡀⠀⠀⠀⠉⠒⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⠶⠓⠒⠉⠉⠉⠉⠙⠛⠓⠒⠶⠦⣄⣀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣦⣀⣀⣤⣾⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⠦⣤⣶⣦⣤⣌⢿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢀⠞⣿⣆⣤⣴⡧⠴⠶⠶⠶⠤⢤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠐⠉⣴⡿⠉⢁⣀⣀⠀⠀⠀⠀⠀⠀⣠⣀⣉⣙⣓⣦⣤⣀⡀⠀⠠⣄⡀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⢰⣹⣴⣿⣿⡿⡿⠀⠀⠀⠀⠀⠘⠿⠿⣿⣿⣿⣿⣟⠹⣿⣷⣶⣤⣈⠳⣤⣀⠀⣸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⡟⣄⣴⣶⠶⢶⣄⡀⠀⠀⢀⣠⣶⣶⠭⠷⣦⡍⠻⡇⠈⢿⣿⣇⡘⢷⣌⣃⣠⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢱⣿⡏⢰⣾⣷⡝⣿⠀⠐⣿⣿⠏⢠⣿⣷⡌⢻⣤⡧⢴⣼⣿⣿⡟⣮⣿⣿⣿⣦⢿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢏⠹⣦⣜⡿⢿⣧⢟⣀⡀⠀⠙⣦⣜⡿⠿⢧⣼⠟⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠈⢹⢫⠀⠀⠀⠘⣟⢢⡀⠈⠁⠈⠀⠀⠀⠀⠀⠀⠀⢹⠻⡼⣿⣿⣿⣿⠀⠹⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⣲⡜⠀⠀⠀⢞⣿⣾⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⡀⣼⣼⣯⢻⣿⣿⠇⠀⠀⢹⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠀⢀⡼⠀⢀⡠⠒⢉⡄⢹⢦⡤⣴⣿⠿⠋⠉⡙⣶⢄⡀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣣⣿⠁⠀⠀⠀⠀⢻⡿⠋⠉⠋⠑⠲⣄⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣏⠓⠋⠀⠓⢉⡠⠞⢁⠔⢃⣸⣷⣄⠀⠀⠀⠀⠈⠪⡂⠉⠒⠦⢤⣾⣋⠵⠽⣻⣷⡙⣜⣦⠀⠀⠀⣼⡟⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡗⠲⢶⣉⣁⣀⣈⣥⣶⣿⣿⠿⠿⣻⡶⣤⣀⣠⠀⠀⠑⠒⣦⣤⣤⣴⣧⣾⣿⣌⠳⡜⣿⣧⠀⠘⣿⡧⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⢠⠃⢀⠎⣩⠋⡽⢉⠅⠀⠈⢩⠉⠁⡀⠀⠈⠉⠛⠛⠛⠿⢿⣿⣿⣿⣿⣿⡏⠹⣶⡹⣼⣿⡆⠀⢳⣧⡀⢀⡀⠀⠀⠀⣠⠟⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢣⠃⢠⠏⣴⢃⠞⢠⠎⠀⠀⠀⡸⠀⠀⢇⠀⢠⠀⠀⢀⠀⠀⠀⠈⢏⠛⢩⠁⢰⠀⢹⣿⣿⣿⡧⠀⠀⠉⠻⠬⠬⠤⠾⠚⠁⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠏⢠⢃⡼⢣⡞⡡⠃⡜⠀⠀⢠⠇⠀⠀⢸⠀⠀⢇⠀⠘⡆⠀⠀⠀⠈⣆⠀⣇⠈⡆⢀⣿⣿⡿⣿⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⡾⠀⡇⡾⢡⡟⡰⠁⣼⠁⠀⠀⡸⠀⠀⠀⣾⠀⠀⢸⡄⠀⠸⡄⠀⢧⠀⠸⡄⢸⠀⣧⢸⣿⣿⣿⣿⣿⣧⣈⡉⠒⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⠀⠀⢀⡤⠚⠁⠀⡇⣿⢸⢃⢿⢠⠃⠘⠈⠀⠀⠀⡇⠀⠀⢰⢻⠀⠀⢸⠃⠀⠀⡇⠀⠘⡆⠀⣇⣸⢀⡏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡉⠒⠤⣀⠀⠀⠀⠀");
console.log("⠀⠀⠀⠀⢀⣴⠏⠀⠀⠀⠀⢹⠏⣿⠸⡜⠞⠀⠀⠀⠀⠀⢸⠀⠀⢠⠏⡼⠀⠀⢸⠀⠀⠀⡇⠀⠀⡇⢀⡟⡟⣼⢡⣿⣷⢏⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣆⡙⠢⣄⠀");
console.log("⠀⠀⠀⡰⣻⠃⠀⠀⠀⠀⠀⠈⡆⢿⢀⢃⠀⠀⠀⠀⠀⠀⢸⠀⢠⠏⣰⠃⠀⢀⡇⡇⠀⣸⠁⡆⢰⠃⣸⣿⠹⢃⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠈⠉⠙⠻⣿⣿⣿⣿⣦⣀⣳");
console.log("⠀⠀⡴⢡⠇⠀⠀⠀⠀⠀⠀⠀⠘⡌⡞⡼⡀⠀⠀⠀⠀⠀⢸⢀⠎⢠⠇⠀⢀⡞⣸⠁⣰⠃⣼⢁⡞⣰⠯⢀⣴⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠟⣉");
console.log("⠀⡼⠁⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣝⢆⢳⡀⠀⠀⠀⠀⣸⡞⢠⠏⠀⢠⠞⣰⢃⡴⢃⡾⣣⠞⣴⣧⣾⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⢣⣾⣿");
console.log("⢰⠃⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⣳⣷⣄⠀⠀⢂⠁⣇⡞⠀⡰⣫⢞⡵⢋⠴⢋⣠⣧⣾⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⡟⣴⣿⣿⣿");
console.log("⠞⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⡝⣏⣷⡪⣆⣸⣇⣼⣿⣕⣯⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠏⣼⣿⣿⣿⣿");
console.log("⠀⠀⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠌⠹⣷⠀⠀⣹⣾⣿⣿⣷⡿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⣿⣿⣿⡏⣾⣿⣿⣿⣿⣿");
console.log("⠀⢠⣿⠀⠀⠑⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⢽⣿⠟⠉⠉⠙⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⣠⣷⣿⣿⣿⡿⣼⣿⣿⣿⣿⣿⣿");
console.log("⢠⣿⡇⠀⠀⠀⠀⠅⠀⠁⠀⡀⠀⢀⠠⠀⠀⠀⠀⠀⠀⢀⡼⡁⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠣⠠⢀⠄⠀⢀⣰⣼⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");