let c = 0;
function primeornot(num) {
  {
    if (num <= 1) {
      console.log("it is not prime");
    }
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        c++;
        break;
      }
    }
    let e =
      c == 0 ? console.log("it is prime") : console.log("it is not prime");
  }
}
primeornot(7);
