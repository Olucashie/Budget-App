
function auth() {
  let tprice = Quantity.value * priceOne.value
  var priceOfItem = Number(tprice)
  var newMoney = money - priceOfItem
  owo.innerHTML = "Available Money: ₦" + newMoney
  money =  newMoney
}


var money = 10000
owo.innerHTML = "Available Money: ₦" + money 
document.getElementById("daTe").innerHTML = Date()


function nawo(){
 

    if (productOne.value == ""  || priceOne.value == "" || Quantity.value =="") {
        error.style.display="block"
    } else if (Number(priceOne.value) > 0 && Number(priceOne.value) > money ){
      mix.style.display="block"
      document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
        document.getElementById('Quantity').value ="" 
      }
       else {
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

