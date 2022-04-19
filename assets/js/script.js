function changeMode(){
    changeClass();
    changeText(); 
     

    console.log('Cliquei');
    
}

 function changeClass(){
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}


function changeText(){
    const lightMode =  'Light Mode';
    const darkMode = 'Dark Mode';

    if(botao.classList.contains('dark-mode')){
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
    
    }
 

const darkModeClass = 'dark-mode';
const botao = document.getElementById("mode-selector");
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener("click", changeMode);
