<template>
  <LocationMap />
  <Calendar/>
</template>
<script>
//引入component
import LocationMap from '@/components/LocationMap.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  components: {
    //註冊component
    LocationMap,
    Calendar
  },
}
</script>