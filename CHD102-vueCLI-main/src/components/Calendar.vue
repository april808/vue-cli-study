<template>
    <VCalendar :attributes="attributes"/>
  
</template>
<script>
  export default {
    data(){
        return{
            attributes:[
                {
                    // Boolean
                    bar: true,
                    dates: [new Date(2018, 0, 1), new Date(2018, 0, 10), new Date(2018, 0, 22)],
                },
                {
                    // String
                    bar: 'red',
                    dates: [new Date(2018, 0, 4), new Date(2018, 0, 10), new Date(2018, 0, 15)],
                },
                {
                    // Object
                    bar: {
                    style: {
                        backgroundColor: 'brown',
                    },
                    },
                    dates: [
                    new Date(2018, 0, 12),
                    new Date(2018, 0, 26),
                    new Date(2018, 0, 15),
                    ],
                },
            ]
        }
    }
}
</script>