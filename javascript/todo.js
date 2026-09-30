

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
