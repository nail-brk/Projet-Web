/// je voulais essayer de les faire mais elles servent à rien ici

/*function setCookie(name, value, days){
    let expires ="";
    if(days){
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires="; expires="+ date.toUTCString();

        document.cookie = name+ "="+ (value || "") + expires + "; path=/";

    }
}

function getCookie(name){
    let nameEq = name + "=";
    let tabcookie = document.cookie.split(';');
    for (let i=0; i<tabcookie.length;i++){
        let cookie=tabcookie[i];
        while (cookie.charAt(0)== ' ') 
            cookie= cookie.substring(1, c.length);
        if(cookie.indexOf(nameEq)==0)
            return cookie.substring(nameEq.length, cookie.length);
    }
}*/

function todoApp(){
    return {
        darkMode: localStorage.getItem('theme')== 'dark',
        dyslexie: localStorage.getItem('dyslexie')== 'true',
        taches: JSON.parse(localStorage.getItem('taches')) || [],
        nouvelleTache: '',

        toggleDarkMode(){
            this.darkMode= !this.darkMode;
            localStorage.setItem('theme', this.darkMode ? 'dark': 'light');
        },

        toggleDyslexie(){
            this.dyslexie= !this.dyslexie;
            localStorage.setItem('dyslexie', this.dyslexie ? 'true': 'false');

        },

        ajouterTache() {
            if (this.nouvelleTache.trim() === '') return;
            this.taches.push({
                id: Date.now(),
                texte: this.nouvelleTache.trim(),
                faite: false
            });
            this.nouvelleTache = '';
            this.sauvegarderTaches();
        },

   
        supprimerTache(id) {
            this.taches = this.taches.filter(t => t.id !== id);
            this.sauvegarderTaches();
        },

        
        sauvegarderTaches() {
            localStorage.setItem('taches', JSON.stringify(this.taches));
        },

        
        get tachesAccomplies() {
            return this.taches.filter(t => t.faite).length;
        },

        get tachesRestantes() {
            return this.taches.filter(t => !t.faite).length;
        }
    };

        
}
