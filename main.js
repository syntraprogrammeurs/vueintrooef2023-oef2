const app = Vue.createApp({
    data(){
        return{
            title: "een h1 titel",
            colors:['red', 'blue', 'pink', 'orange', 'purple'],
            fgColorIndex:0, //red is het eerste element.
            bgColorIndex:1
        }
    },
    methods:{
        changeColorFg(){
            this.fgColorIndex = (this.fgColorIndex + 1)%this.colors.length
        },
        changeColorBg(){
            this.bgColorIndex = (this.bgColorIndex + 1)%this.colors.length
        }
    },
    computed:{
        fgColor(){
            return this.colors[this.fgColorIndex]
        },
        bgColor(){
            return this.colors[this.bgColorIndex]
        }
    }
});

const mountedApp = app.mount('#app');
