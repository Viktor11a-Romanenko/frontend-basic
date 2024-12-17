let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function (sum) {
  if (sum >= 0) {
    this.balance += sum;
    console.log(`Вы положили ${sum}€`);
    console.log(`На Вашем балансе ${this.balance}€`);
  } else {
    console.log(
      `Вы вводите отрицательное значение ${sum}€. Пожалуйста, внесите положительную сумму!`
    );
  }
};

bankAccount.withdraw = function (sum) {
  if (sum >= 0 && this.balance >= sum) {
    this.balance -= sum;
    console.log(`Вы сняли ${sum}€`);
    console.log(`На Вашем балансе ${this.balance}€`);
  } else if (sum < 0) {
    console.log(`Вы вводите отрицательное значение ${sum}€.`);
    console.log("Пожалуйста, введите положительную сумму!");
  } else {
    console.log(
      `Вы хотите снять ${sum}€, на Вашем счету меньше денежных средств, указанной суммы!`
    );
    console.log(`На Вашем балансе ${this.balance}€`);
  }
};

bankAccount.checkBalance = function () {
  console.log(`На Вашем балансе: ${this.balance}€`);
};

bankAccount.checkBalance();
bankAccount.deposit(0);
bankAccount.withdraw(-50);
