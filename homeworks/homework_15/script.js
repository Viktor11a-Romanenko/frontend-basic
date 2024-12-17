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
}

function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    accountList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
  });
}

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function () {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim();
  const amount = Number(amountInput.value.trim());

  bank.forEach((accountElement) => {
    if (accountElement.accountNumber.toString() === accountId) {
      const initialBalance = accountElement.balance;
      accountElement.deposit(amount);

      if (accountElement.balance > initialBalance) {
        alert(`Successfully deposited ${amount} to account ID: ${accountId}`);
      }
    }
  });
};

withdraw.onclick = function () {
  const accountIdInput = document.getElementById("accountId");
  const accountId = accountIdInput.value.trim();

  const amountInput = document.getElementById("amount");
  const amount = Number(amountInput.value.trim());

  bank.forEach((accountElement) => {
    if (accountElement.accountNumber.toString() === accountId) {
      const initialBalance = accountElement.balance;
      accountElement.withdraw(amount);

      if (accountElement.balance < initialBalance) {
        alert(`Successfully withdraw ${amount} to account ID: ${accountId}`);
      }
    }
  });
};
