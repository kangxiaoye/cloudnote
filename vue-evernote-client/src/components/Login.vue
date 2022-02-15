<template>
    <div>
      <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            msg:"this is login"
          }
      }
    }
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
