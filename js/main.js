/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 * Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
    el: '#header',
    data: {
        title: 'Lorem Picsum',
        img: 'https://picsum.photos/200',
        center: 'text'
    },
    methods: {
        change: function () {
            this.center = this.center === 'text' ? 'red' : 'text';
        }
    }
});