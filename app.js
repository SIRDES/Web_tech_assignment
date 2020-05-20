// Getting DOM elements

let username = document.getElementById('name'),
 itemEl = document.getElementById('items'),
 amntEl = document.getElementById('amount'),
 fregEl = document.getElementById('freg'),
  stoveEl = document.getElementById('stove'),
orderComplete = document.getElementById('orderPreview');

//  Assigning variables to number of 
// items to order and total amount of order 

let items= 0, amount=0;

// An event listener for Refegerators to order

fregEl.addEventListener('click',(e) =>{

            let ref = e.target.value;
            if(ref === "689.95"){
            amount = amount + 689.95;
            }

            else if (ref === "925.95"){
            amount = amount + 925.95;
            }

            else if (ref === "609.95"){
            amount = amount + 609.95;
            }
            else if (ref === "749.95"){
            amount = amount + 749.95;
            }   
            amntEl.innerHTML=amount;       
    items++;
    itemEl.innerHTML=items;
    
});

// An event listener for stoves orders

stoveEl.addEventListener('click',(e)=>{
 
        let ref = e.target.value;
        if(ref === "619.95"){
        amount = amount + 619.95;
        }

        else if (ref === "829.95"){
        amount = amount + 829.95;
        }

        else if (ref === "499.95"){
        amount = amount + 499.95;
        }
        else if (ref === "649.95"){
        amount = amount + 649.95;
        }  
        else if (ref === "479.95"){
            amount = amount + 479.95;
        }  
    amntEl.innerHTML=amount;
    items++;
    itemEl.innerHTML=items;
});

 function submitOrder(e){
     alert('Thank you')
 };



