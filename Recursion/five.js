function countDigits(num,count){
  if(num!=0){
    let x=num%10;
    count=count+1
    let y = Math.floor(num/10)
    return countDigits(y,count)
  }
  console.log(count)
}
countDigits(1255578890,0)