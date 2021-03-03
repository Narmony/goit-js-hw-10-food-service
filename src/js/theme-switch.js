const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');

bodyRef.classList.add(theme.LIGHT);

loadedTheme();

themeSwitchRef.addEventListener('change', toggleTheme);

function toggleTheme() {
    if (bodyRef.classList.contains(theme.LIGHT)) {
        bodyRef.classList = theme.DARK
    }else {
        bodyRef.classList = theme.LIGHT
    };
    
    localStorage.setItem('theme', bodyRef.classList )
};

function loadedTheme(){
    const themeSelected = localStorage.getItem('theme');
    if (themeSelected === theme.DARK) { 
        bodyRef.classList = theme.DARK;
        themeSwitchRef.checked = true;
    }
};