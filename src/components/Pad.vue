<template>
<div class="row">
    <div class="col-md-8 mx-auto">
    <p class="text-primary text-center">* Please add your signature *</p>
      <VueSignaturePad width="250px" height="250px" ref="signaturePad" style="background-color: #f2f2f2;"/>
      <div class="mt-1 d-flex justify-content-center">
        <button class="btn btn-sm btn-outline-primary m-1" @click="undo">Undo</button>
        <button class="btn btn-sm btn-primary m-1" @click="save">Save</button>
        <!-- <a class="btn btn-primary" :href="data" download>Download signature</a> -->
      </div>
    </div>
  </div>
    
</template>
<script>
export default {
  name: 'SignaturePad',
  data(){
        return {
            data: ''
        }
    },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      this.data = data;
      console.log(data);
      this.$emit('saveImage', data)
    }
  }
};
</script>