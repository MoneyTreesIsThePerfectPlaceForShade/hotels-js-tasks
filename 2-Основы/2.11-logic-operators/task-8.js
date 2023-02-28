// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert("first"); // ИЛИ ищет первое ИСТИННОЕ, потому результатом if
// будет -1, а алёрт сработает
if (-1 && 0) alert("second"); // И ищет первое ЛОЖНОЕ, потому результатом if
// будет 0, а алёрт не сработает
if (null || (-1 && 1)) alert("third"); // у И приоритет выще,
// потому сначала выполнится он, ложного значения в И нет, потому вернется последнее,
// то есть 1, получается (null || 1), ИЛИ ищет первое ИСТИННОЕ, значит результатом if
// будет 1, а алёрт выполнится

// ОТВЕТ: сработает первый alert и третий. В первом if будет -1 (true),
// во втором 0(false), в третьем 1 (true)
