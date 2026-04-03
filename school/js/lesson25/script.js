let appNote = {
    data(){
        return{
            title:'Щоб не забути...',
            pl:'Введіть свій текст...',
            note:' ',
            notesArr: [],
        }
        
    },
    methods: {
        AddFunc(){
            if (this.note != '' && this.note != ' ') {
                this.notesArr.push(this.note);
                localStorage.setItem('list', JSON.stringify(this.notesArr) )

            }
            this.note = ''
            console.log(this.notesArr);
        },
        DelFunc(i){
            this.notesArr.splice(i, 1)
            localStorage.setItem('list', JSON.stringify(this.notesArr))
        }
    },
    mounted() {
        if (localStorage.getItem('list') != null){
            this.notesArr = JSON.parse(localStorage.getItem('list')) ;
        }
    }
    
}

Vue.createApp(appNote).mount('.to-do-list')