let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// когда получаем массив - это база рекурсии, тривиальный случай
// когда получаем объект, то это шаг рекурсии, задача делится на подзадачи
// рано или поздно мы в этих подзадачах дойдем до базового случая

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, current) => total + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

console.log(sumSalaries(company));
