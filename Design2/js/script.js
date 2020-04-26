const incrementButtons = document.querySelectorAll('.q-btn');
incrementButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const parentElement = btn.parentElement;
        let quantityBox = parentElement.querySelector('.quantity-box');
        let markedPrice = parentElement.querySelector('.marked-price');
        let price = parentElement.querySelector('.price');
        let inputvalue = +quantityBox.getAttribute('value');
        if(btn.classList.contains('increment-btn')){
            inputvalue+=1;
        }
        else{
            if(inputvalue > 1 ){
                inputvalue-=1;
            }
        }
        quantityBox.setAttribute('value',inputvalue);
        price.innerHTML= '$' + (+markedPrice.innerHTML.slice(1) * inputvalue);
        calculateTotal()
    })
})

function calculateTotal(){
    const subTotalDiv = document.getElementById('sub-total');
    const grandTotalDiv = document.getElementById('grand-total');
    const prices = document.querySelectorAll('.price');
    const paybtn = document.querySelector('.pay-btn');
    let total = 0;
    prices.forEach(price=>{
        total = total + (+price.innerHTML.slice(1));
    })
    subTotalDiv.innerHTML = `$${total}`;
    grandTotalDiv.innerHTML =`$${total + 3}`;
    paybtn.innerHTML = `Payable Amount - $${total+3}`;
}