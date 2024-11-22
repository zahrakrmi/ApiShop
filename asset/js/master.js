let main = document.querySelector('main')
let mypop = document.querySelector('.mypop')
let myinfo = document.querySelector('.mypop>.myinfo')


//////////home////////////////
fetch('https://fakestoreapi.com/products/')

    .then(res => {
        if (res.ok)
            return res.json()
        Promise.reject(err)
    })

//////////daryaft az api////////
    .then(data => {
        data.map((val) => {
            let shop = document.createElement('div')
            shop.innerHTML = `
             <img src=${val.image} alt="">
            <p>${val.category} </p>
            <h2>${'$'+val.price}</h2>
            <button onclick='_pop(${val.id})'>more info</button>
            `
            main.appendChild(shop)
        })
    })
    .catch((err) => console.log(err))

///////////click button///////////

function _pop(i){
    mypop.style.left='0px'
    fetch('https://fakestoreapi.com/products/'+ i)

    .then(res=> res.json())
    .then(data=>{
        mypop.children[1].src=data.image
        myinfo.children[0].innerHTML='ID: '+data.id
        myinfo.children[1].innerHTML=data.category
        myinfo.children[2].innerHTML=data.title
        myinfo.children[3].innerHTML=data.description
        myinfo.children[4].innerHTML='$'+data.price
        myinfo.children[5].innerHTML=data.rating.rate
        myinfo.children[6].innerHTML=data.rating.count
       
    })
}
function myclose(){
    mypop.style.left='-100%'
}