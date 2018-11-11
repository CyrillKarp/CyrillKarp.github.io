var app = new Vue({
    el: '#app',
    data: {
        selected1: false,
        selected2: false,
        selected3: false,
    },
    
    computed: {
        footerText1: function() {
            if(this.selected1) {
                return 'Печень утки разварная с артишоками.'
            }
                return 'Чего сидишь? Порадуй котэ, <a href="" class="product-item__buy-link">купи</a>'
        },
        
        footerText2: function() {
            if(this.selected2) {
                return 'Головы щучьи с чесноком да свежайшая сёмгушка.'
            }
                return 'Чего сидишь? Порадуй котэ, <a href="" class="product-item__buy-link">купи</a>'
        },
        
        footerText3: function() {
            if(this.selected3) {
                return 'Филе из цыплят с трюфелями в бульоне.'
            } 
                return 'Чего сидишь? Порадуй котэ, <a href="#" class="product-item__buy-link">купи</a>'

        }
    }
})