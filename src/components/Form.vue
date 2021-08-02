<template>
<div class="container">
    <div id="form" class="container p-4 mx-auto my-2">
      <div class="d-flex justify-content-center">
        <h1>LOST RECEIPT AFFIDAVIT</h1>
      </div>
      <p>This is to certify that on <input type="text" placeholder="" class="no-border gray"/> <input type="text" placeholder="" class="no-border gray"/></p> 
      <p>I paid the sum of $<input type="text" placeholder="" class="no-border gray"/> for <input type="text" placeholder="" class="no-border gray"/></p> 
      <p>Vendor’s Name: <input type="text" placeholder="" class="no-border gray"/></p> 
      <p>Vendor’s Address: <input type="text" placeholder="" class="no-border gray"/></p> 
      <div class="row ">
        <div class="col-6">
          <div>Item</div>
          <input type="text" placeholder="" class="no-border gray"/> 
          <input type="text" placeholder="" class="no-border gray"/> 
          <input type="text" placeholder="" class="no-border gray"/> 
        </div>
        <div class="col-6">
          <div>Cost</div>
          <input type="text" placeholder="" class="no-border gray"/> 
          <input type="text" placeholder="" class="no-border gray"/> 
          <input type="text" placeholder="" class="no-border gray"/> 
        </div>
      </div>

      <p class="text-justify mb-4">TOTAL COST <input type="text" placeholder="" class="no-border gray"/> 
      </p>
      <p class="text-justify mb-4">
        I further certify that the <em class="font-weight-bold">itemized receipt</em> for this payment has been lost 
        or was not received from the vendor and that this statement is given in lieu
        of that itemized receipt to obtain reimbursement for this expenditure. <em class="font-weight-bold">A copy
        of your Debit or Credit Card Statement must accompany this Lost Receipt Affidavit
        if expense was incurred on personal card</em> . I also certify that no alcoholic 
        beverages or tobacco products and/or gift cards/gift certificates were purchased.
      </p>
      <p class="text-justify mb-4">
        I certify that the attached receipts or invoices represent legitimate expenses 
        incurred solely for the benefit of the student organization. I also certify that 
        I have not been previously reimbursed for these expenses and am still currently 
        due this reimbursement.	
      </p>

      <div class="row">
        <div class="col">
          <div v-if="signature" class="col-md-8 mx-auto">
            <img :src="signature" height="250" width="250"/>
            <div>
              <label for="" class="text-center">SIGNATURE</label>
            </div>
            
          </div>
          <div v-else>
            <Pad @saveImage="showImage"/>
          </div>
        </div>
        <div class="col mx-auto">
          <input type="text" placeholder="" class="no-border gray"/> 
          <label for="" class="text-center">PRINTED NAME</label>
        </div>
      </div>
      <hr class="m-2">

      <p class="text-justify">THIS LOST RECEIPT AFFIDAVIT MUST BE SUBMITTED IN LIEU OF RECEIPT FOR PAYMENT PROCESSING.</p>
    

    </div>
        <div class="p-4 d-flex justify-content-center">
        <button class="btn btn-sm btn-primary" @click="makePDF">Create pdf</button>
      </div>
</div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Pad from './Pad.vue'

export default {
  name: 'HelloWorld',
  components:{
    Pad
  },
  data(){
    return {signature:''}
  },
  props: {
    msg: String
  },
  methods: {
    makePDF(){

      // 1st Approach I want to keep exploring
      // html2canvas(document.getElementById("form"))
      // .then((canvas) => {
      //   const imgData = canvas.toDataURL('image/png');
      //   const pdf = new jsPDF('p', 'mm', 'a4');
      //   const imgProps= pdf.getImageProperties(imgData);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //   pdf.addImage(imgData, 'jpeg', 0, 0, pdfWidth, pdfHeight);
      //   pdf.save('download.pdf');
      // });

      // 2nd Approach I want to keep exploring
      // const doc = new jsPDF('p', 'mm', 'a4');
      // const width = doc.internal.pageSize.getWidth();
      // const height = doc.internal.pageSize.getHeight();
      // console.log(width, height)
      // const myObject = document.querySelector("#form");
      // myObject.width= width;
      // myObject.height= height;
      // console.log(myObject.width, myObject.height)

      // doc.html(myObject, {
      //   callback: function(pdf){

      //     pdf.save("mypdf.pdf")
      //   }
      // })

      document.body.style.zoom = "70%"
      const quality = 1 // Higher the better but larger file
      html2canvas(document.querySelector('#form'),
          { scale: quality }
      ).then(canvas => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', -2, 0, 210, 298);
          pdf.save("document.pdf");
      });
      document.body.style.zoom = "100%"
    
    },

    showImage(data){
      this.signature=data
    }
  }
}
</script>

<style>


input {
  min-width: 250px;
  margin: 5px;
}

label {
  min-width: 250px;
  margin: 5px;
  border-top: 1px black solid;
}

.no-border {
    border: 0;
    box-shadow: none; 
}

.gray{
  background: #f2f2f2;
}

#form {
  color: #2c3e50;
  background: white;
  /* height: 350mm; */
  width: 210mm;
}

</style>
