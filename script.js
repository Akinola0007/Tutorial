$(document).ready(function () {
    
    
   function payment(amt){
    let handler = PaystackPop.setup({
        key: 'pk_test_f0246d7486988bfca62771b2bd85006ef6d8b611', // Replace with your public key
        email: "test@test.com", // Replace with your email
        amount: amt * 100,
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
          alert('please make the payment.');
        },
        callback: function(response){
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });

          handler.openIframe();

    }

    let data =  [
        {image: "./images/1.jpg", discount: "50%", amt: 1100000, title: "Tractor"},
        {image: "./images/truck1.jpg", discount: "30%", amt: 500000, title: "Tractor"},
        {image: "./images/truck2.jpg", discount: "70%", amt: 1000000, title: "Truck"},
        
        
    ]

    data.map((item) =>{
        let firstdiv = document.createElement("div")
        firstdiv.setAttribute("class", "col-md-4 col-12")
 
        let seconddiv = document.createElement("div")
        seconddiv.setAttribute("class", "card")
 
        firstdiv.appendChild(seconddiv)
 
        let img = document.createElement("img")
        img.setAttribute("class", "card-img-top" )
        img.setAttribute("src", item.image)
 
        seconddiv.appendChild(img)
 
        let span = document.createElement("span")
        span.setAttribute("class", "badge rounded-pill text-bg-primary")
        span.innerText = item.discount
 
        seconddiv.appendChild(span)
 
        let thirddiv = document.createElement("div")
        thirddiv.setAttribute("class", "card-body")
 
        seconddiv.appendChild(thirddiv)
 
        let p = document.createElement("p")
        p.setAttribute("class", "card-text")
        p.innerText = item.title
 
        let h4 = document.createElement("h4")
        h4.setAttribute("class", "card-title")
        h4.innerText = item.amt
 
        thirddiv.appendChild(h4)
        thirddiv.appendChild(p)
 
        let fourthdiv = document.createElement("div")
        fourthdiv.setAttribute("class", "card-footer")
 
        seconddiv.appendChild(fourthdiv)
 
        let button = document.createElement("button")
        button.setAttribute("class", "w-100 btn btn-danger")
 
        button.onclick = function(){
         payment(item.amt)
        }
 
        fourthdiv.appendChild(button)
 
        let i = document.createElement("i")
        i.setAttribute("class", "fa-solid fa-shopping-cart")
 
        button.appendChild(i)
 
 
        document.querySelector(".row").append(firstdiv)
    })


})