const colaItems = document.querySelectorAll('.cola-list-cont li');
const colaListSelected  = document.querySelector('.cola-list.selected')
let clickCnt = 0;


//음료 선택 시 장바구니에 음료 추가
colaItems.forEach(item=>item.addEventListener('click',(e)=>{
    console.log(e.target)
    clickCnt++
    // console.log(colaListSelected)
    console.dir(item.innerText)
    const selectedItemLi = document.createElement('li')
    const selectedItemBtn = document.createElement('button')
    selectedItemBtn.setAttribute('class','selected-item')
    const selectedItemImg = document.createElement('img')
    selectedItemImg.setAttribute('class','cola-li-img')
    selectedItemImg.setAttribute('src',`mediaquery/${item.innerText.split('\n')[0]}.png`)
    const selectedItemTxt= document.createElement('strong')
    selectedItemTxt.setAttribute('class','cola-txt')
    selectedItemTxt.innerText=`${item.innerText.split('\n')[0]}`
    const selectedItemAmt = document.createElement('data')
    selectedItemAmt.setAttribute('class','cola-amt')
    
    selectedItemLi.appendChild(selectedItemBtn);
    selectedItemBtn.appendChild(selectedItemImg);
    selectedItemBtn.appendChild(selectedItemTxt);
    selectedItemBtn.appendChild(selectedItemAmt);
    console.log(clickCnt)
    if (clickCnt==1) {
        selectedItemAmt.innerText = `1`
        colaListSelected.appendChild(selectedItemLi);
    } else {
        selectedItemAmt.innerText+=1
    }
    // console.dir(selectedItemLi);
    // console.log(selectedItemLi.textContent)

    // if (!selectedItemLi.textContent){
    //     selectedItemAmt.innerHTML = `1`
    // } else {
    //     let amtData = parseInt(selectedItemAmt.innerHTML)
    //     amtData +=1
    //     amtData+''
    // }
}))


//입금액 입금시 소지금 누적
// let depositInput = document.querySelector('.deposit-input')
// const depositBtn = document.querySelector('.ctl-btn.deposit')
// let myMoneyAmt = document.querySelector('.money-info.my-money .money-amt')
// depositBtn.addEventListener('click',()=>{
//     if (!myMoneyAmt.textContent && depositInput.value){
//         myMoneyAmt.textContent = `${depositInput.value}원`;
//         depositInput.value=''
//     } else if (!depositInput.value) {
//         alert('입금액을 입력하세요.')
//     }else {
//         myMoneyAmt.textContent = `${parseInt(depositInput.value) + parseInt(myMoneyAmt.textContent)}원`
//         depositInput.value=''

//     }
// })

//입금 기능
let depositInput = document.querySelector('.deposit-input')
const depositBtn = document.querySelector('.ctl-btn.deposit')
let myMoneyAmt = document.querySelector('.money-info.my-money .money-amt')
let depositLeft = document.querySelector('.money-info.left .money-amt')

depositBtn.addEventListener('click',()=>{
    if(depositInput.value){//소지금에서 잔액 차감
        myMoneyAmt.textContent = `${parseInt(myMoneyAmt.textContent)-parseInt(depositInput.value)}`
        if (!depositLeft.textContent) { //잔액이 없는 경우
        depositLeft.textContent = `${depositInput.value}`
        depositInput.value=''
        } else { //잔액이 있는 경우
            depositLeft.textContent = `${parseInt(depositLeft.textContent) + parseInt(depositInput.value)}`
        }
    } else {
        alert('입금액을 입력하세요!')
    }
})

//콜라 클릭 시 잔액 차감
colaItems.forEach(item => item.addEventListener('click',()=>{
    depositLeft.textContent = `${parseInt(depositLeft)}-${parseInt(item.dataset.price)}`
})
)