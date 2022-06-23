function fibo(first, second, counter) {
  if (counter <= 9) {
    let c = first+second;
    return fibo(second, c, counter+1)
  }
  console.log(first)
}
fibo(1, 1, 1)