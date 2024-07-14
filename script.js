const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passIndicator = document.getElementById('passIndicator');

const lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
const uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const number = "0123456789";
const symbol = "~!@#$%^&*()-+={[}];':<>?/\"";


const passwordStrength = (pass) =>{
    if(pass.length <= 7){
        return "weak";
    }
    else if(pass.length <= 12){
        return "medium";
    }
    else{
        return "strong";
    }
}

const updatePasswordIndicator = () =>{
     const strength = passwordStrength(passBox.value);
     passIndicator.className = 'pass-indicator  '+strength;

}

const generatePassword = () => {
    let len = inputSlider.value;
    let chars = "";
    let password = "";
    chars += lowercase.checked ? lowercaseLetters : "";
    chars += uppercase.checked ? uppercaseLetters : "";
    chars += numbers.checked ? number : "";
    chars += symbols.checked ? symbol : "";
    
    for(let i = 0; i < len; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    passBox.value = password;

    updatePasswordIndicator();
}

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
    generatePassword();
})

// window.addEventListener('DOMContentLoaded',()=>{
//     updatePasswordIndicator();
// })

generateBtn.addEventListener('click',generatePassword)

copyBtn.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";

        setTimeout(()=>{
           copyBtn.innerHTML = "content_copy";
        },3000);
    }
})
