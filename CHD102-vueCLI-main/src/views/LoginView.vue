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
        alert('登入成功')
      }else{
        alert('錯囉')
        this.email = ''
        this.psw = ''
      }
    }
  },
}
</script>
