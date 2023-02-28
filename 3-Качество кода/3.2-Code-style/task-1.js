// Какие недостатки вы видите в стиле написания кода этого примера?

/*

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}

*/

// В мире, где есть Prettier и ESLint о таком забавно спрашивать, но задание есть задание
// не хватало пробелов, скобки установлены как в C подобных языках, также JS допускает
// отсутствие фигурных скобок, если в if-else или for всего одна строчка кода

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;

  return result;
}

let x = prompt("x?", ""),
  n = prompt("n?", "");
if (n <= 0)
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
else alert(pow(x, n));
