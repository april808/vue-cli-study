<template>
    <div>
        <p>option API</p>
        {{ count }}
        <button @click="add">+</button>
        {{ text }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            count: 0,
            atter: [
                {
                    key: 'today',
                    highlight: true,
                    dates: new Date()
                },
            ]
        }
    },
    computed:{
        text(){
            return this.count > 5? 'O': 'X'
        }
    },
    methods: {
        add(){
            this.count ++
        }
    }
}
</script>