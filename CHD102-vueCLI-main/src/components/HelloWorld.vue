<template>
  <section :class="sectionBg">

    <Button type="primary" @click="modal = true">
      {{ sctionTitle }}
    </Button>

    <Modal
      v-model="modal"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel"
    >
        <p>底色{{ sectionBg }}</p>
    </Modal>

  </section>
</template>

<script>
export default {
  props: ['sctionTitle', 'sectionBg'],
  // props: {
  //   sctionTitle: String,
  //   sectionBg: String
  // },
  data () {
    return {
        modal: false
    }
  },
  methods: {
    ok () {
        this.$Message.info('Clicked ok' + this.sctionTitle);
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
  //垂直置中
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  height: 100vh;
  //預設底色
  background-color: rgb(84, 96, 97);
  
  &.red{
    background-color: rgb(126, 35, 35);
  }
  &.black{
    background-color: rgb(8, 8, 8);
  }
  &.grayGreen{
    color: #333;
    background-color: rgb(165, 178, 166);
  }
}
</style>
