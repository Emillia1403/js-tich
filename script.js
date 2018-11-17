var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var statia = prompt("Введите обязательную статью расходов в этом месяце", "");
var skolko = prompt("Во сколько обойдется?", "");

var appData = {
    budget : money,
    timeData : time,
    expenses : {
        statia : skolko
    },
    optionalExpenses : "",
    income: [],
    savings: false
};

alert((money - skolko)/30);