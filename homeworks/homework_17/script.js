let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance += sum)
    : alert("Некорректная сумма пополнения");
};

bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }

  nameInput.value = "";
  console.log(bank);
}

function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;

    // Логика удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.append(deleteBtn);
    accountList.append(li);

    deleteBtn.onclick = function () {
      const answer = bank.splice(index, 1);
    };
  });

  const withdraw = document.getElementById("withdraw");
  const deposit = document.getElementById("deposit");

  deposit.onclick = function () {
    operation("deposit");
  };

  withdraw.onclick = function () {
    operation("withdraw");
  };

  function operation(operator) {
    const accountIdInput = document.getElementById("accountId");
    const amountInput = document.getElementById("amount");

    const accountId = accountIdInput.value.trim();
    const amount = +amountInput.value.trim();

    const accountFind = bank.find(
      (e) => e.accountNumber.toString() === accountId
    );

    if (accountFind) {
      if (operator === "deposit") {
        accountFind.deposit(amount);
      } else {
        accountFind.withdraw(amount);
      }
    } else {
      alert("Account not found");
    }

    accountIdInput.value = "";
    amountInput.value = "";
  }
}
