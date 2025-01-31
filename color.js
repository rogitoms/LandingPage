const dropdownButton = document.querySelector('.dropdown-button');
   
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
let targetElements = [];

// find and track elements with the original color
function initializeTargetElements() {
    document.querySelectorAll('*').forEach(function (element) {
        const styles = window.getComputedStyle(element);
        if (styles.color === 'rgb(119, 23, 215)' || styles.backgroundColor === 'rgb(119, 23, 215)') {
            targetElements.push(element);
        }
    });
}
//appply colors
dropdownLinks.forEach(function (link) {
    const colorName = link.textContent;
    link.setAttribute('data-color', colorName);
});

function updateColors(selectedColor) {
    targetElements.forEach(function (element) {
        const styles = window.getComputedStyle(element);
        if (styles.color === 'rgb(119, 23, 215)' || element.style.color) {
            element.style.color = selectedColor;
        }
        if (styles.backgroundColor === 'rgb(119, 23, 215)' || element.style.backgroundColor) {
            element.style.backgroundColor = selectedColor;
        }
    });
}

// Add event listeners to dropdown links
dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedColor = this.getAttribute('data-color');
        const selectedText = this.textContent;

        updateColors(selectedColor); 
        dropdownButton.textContent = selectedText;
        localStorage.setItem('selectedColor', selectedColor);
        localStorage.setItem('selectedText', selectedText); 

        // Close the dropdown
        dropdownContent.style.display = 'none';
    });
});

// Reopen dropdown on button click
dropdownButton.addEventListener('click', function () {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'; // Close if already open
    } else {
        dropdownContent.style.display = 'block'; // Open if closed
    }
});

// On page apply saved color
document.addEventListener('DOMContentLoaded', function () {
    initializeTargetElements(); 

    const savedColor = localStorage.getItem('selectedColor');
    const savedText = localStorage.getItem('selectedText');
    if (savedColor && savedText) {
        updateColors(savedColor);
        dropdownButton.textContent = savedText; 
    }
});

// Close dropdown clicking outside 
document.addEventListener('click', function (event) {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

// Add color picker functionality
const colorPicker = document.getElementById('myDropdown');

colorPicker.addEventListener('input', function () {
    const selectedColor = this.value;
    updateColors(selectedColor);
    dropdownButton.textContent = selectedColor;
    localStorage.setItem('selectedColor', selectedColor);
    localStorage.setItem('selectedText', selectedColor);
});

const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
    "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
    "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
    "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick",
    "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite",
    "Gold", "GoldenRod", "Gray", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory",
    "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
    "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen",
    "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
    "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen",
    "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
    "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid",
    "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum",
    "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown",
    "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
    "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

const dropdownContent = document.getElementById("myDropdown");

colors.forEach(color => {
    const a = document.createElement("a");
    a.textContent = color;
    dropdownContent.appendChild(a);
});
      //filter the colors and show the one searched
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
            }

            function filterFunction() {
            const input = document.getElementById("myInput");
            const filter = input.value.toUpperCase();
            const div = document.getElementById("myDropdown");
            const a = div.getElementsByTagName("a");
            for (let i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
                } else {
                a[i].style.display = "none";
                }
            }
            }