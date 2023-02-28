// Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// ОТВЕТ: как по мне, в этом тесте легко допустить ошибку, лучше сразу написать результат
// самому или сделать ф-ию, которая будет сама проверять, пример ниже:

describe('Проверяет функцию pow при возведении в пятую степень', function(){
  function makeTest(x){
    let expected = x*x*x*x*x;
    it(`${x} в степени 5 будет ${expected}`, function(){
    assert.equal(pow(x,5),expected)
  })
}

for(let i = 0; i<5;i++){
  makeTest(i)
}
})