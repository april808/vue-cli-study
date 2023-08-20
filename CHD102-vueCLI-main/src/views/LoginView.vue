<template>
  <div>
    Login
    <label for="email">email</label>
    <br>
    <input type="email" v-model="email">
    <br>
    <button @click="login">登入</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      psw: '',
    }
  },
  methods: {
    //記得還要判斷密碼～自己寫
    login(){
      if(this.email === 'test'){
        this.$store.commit('setName', this.email )
        this.$router.push('/')
      }else{
        this.email = ''
        this.psw = ''
      }
    }
  },
}
</script>
