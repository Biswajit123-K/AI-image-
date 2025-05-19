 
 const API_key = `vk-6hcvhD50eNha6SaVQ3D55oUxqmLdHBtUzBfjRVnlAD222g`;
 const API_URL = `https://api.vyro.ai/v2/image/generations`;
const image_result = document.getElementById("img_result");
const img_container = document.getElementById("img_cont");

 function generateimg(){
    const promtVal = document.getElementById("prompt").value;
    const styleValue = document.getElementById("dropdown-style").value;
    const ratioValue = document.getElementById("dropdown-ratio").value;
    
    if(!promtVal){
        alert("Please enter a prompt");
        return;
    }
    setLoadingstate(true);
    // console.log(
    //     promtval,
    //     styleValue,ratioValue
    // )

    //prapare from data for API resuest
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+API_key);



    const fromData = new FormData();
fromData.append('prompt',promtVal);
fromData.append('style', styleValue);
fromData.append('aspect_ratio',ratioValue);
var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: fromData,
   redirect: 'follow'
};
fetch(API_URL,requestOptions)
   .then(response => response.blob())
   .then(blob => {
const imageurl = URL.createObjectURL(blob);
 image_result.src = imageurl;

   } )
   .catch(error => {
   
    console.log('error', error);
    alert("An error occured while generating image");
   })
   .finally(()=>{
    setLoadingstate(false);
   });
  
 }
  
 function setLoadingstate(isLoading){
    if(isLoading){
 image_result.style.display = `none`;
img_container.classList.add(`loading`);
    }
else{
 image_result.style.display = `block`;
img_container.classList.remove(`loading`);
}
 }