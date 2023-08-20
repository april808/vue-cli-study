<template>
    <div class="user">
      <aside></aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
</template>

<style lang="scss">
.user{
    width: 90%;
    height: 20rem;
    margin: 1rem auto;
    max-width: 1280px;
    background-color: #a6beaa;
    padding: 1rem;
    display: inline-flex;
    >aside{
        background-color: #acbfd1;
        flex-basis: 10rem;
        height: 100%;
    }
    >main{
        background-color: #d1c2ac;
        flex-basis: calc(100% - 10rem);
        height: 100%;
    }
}
</style>