
let you;
document.getElementById("daTe").innerHTML = Date()

function setB() {
  you = document.getElementById('set').value
  if (set.value==="") {
    error2.style.display="block"
  }else{
    hok.style.display="block"
    di.style.display="none"
    document.getElementById("owo").innerHTML = `Available Money: ₦ ${you}`
  }
}
let dis = document.getElementById('ok')
let mn = document.getElementById('owo')
let bb = document.getElementById('bolu')
function auth() {
  let tprice = Quantity.value * priceOne.value
  var priceOfItem = Number(tprice)
  var newMoney = you - priceOfItem
  owo.innerHTML = "Available Money: ₦" + newMoney
  you =  newMoney
}
let money = you
owo.innerHTML = "Available Money: ₦" + money 
function nawo(){
 

    if (productOne.value == ""  || priceOne.value == "" || Quantity.value =="") {
        error.style.display="block"
    } else if (Number(Quantity.value * priceOne.value) > 0 && Number(Quantity.value * priceOne.value) > you){
      mix.style.display="block"
      document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
        document.getElementById('Quantity').value ="" 
      }
       else {
        dis.style.display='block'
       let kol  = `<tr>
        <td>${productOne.value}</td>
        <td> ${Quantity.value}</td>
        <td>₦ ${priceOne.value}</td>
        <td>₦ ${Quantity.value * priceOne.value}</td>
        </tr>`
        document.getElementById('showOne').innerHTML += kol
        auth()
        document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
        document.getElementById('Quantity').value ="" 
        mix.style.display="none"
        error.style.display="none" 
        }
          
    }


    function myFunction() {
      dis.style.color = 'white'
      bb.style.color = 'white'
      mn.style.color = 'white'
      var element = document.body;
      element.classList.toggle("dark-mode");
      owo.style.color = white
      h4.style.color = white
   }
   