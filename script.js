// ===============================
// PocketSmart AI
// Budget & Recommendation System
// ===============================

// Variables
let totalIncome = 0;
let totalExpense = 0;
let monthlyBudget = 0;

let transactions = [];


// ===============================
// ADD INCOME
// ===============================

document.getElementById("incomeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = Number(
        document.getElementById("incomeAmount").value
    );

    const source =
        document.getElementById("incomeSource").value;

    if (amount <= 0) {
        alert("Please enter a valid income amount.");
        return;
    }

    totalIncome += amount;

    transactions.push({
        type: "Income",
        category: source,
        description: "Income",
        amount: amount
    });

    document.getElementById("incomeForm").reset();

    updateDashboard();
    updateTransactions();
    generateRecommendation();

});


// ===============================
// ADD EXPENSE
// ===============================

document.getElementById("expenseForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = Number(
        document.getElementById("expenseAmount").value
    );

    const category =
        document.getElementById("expenseCategory").value;

    const description =
        document.getElementById("expenseDescription").value;

    if (amount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    totalExpense += amount;

    transactions.push({
        type: "Expense",
        category: category,
        description: description || "Expense",
        amount: amount
    });

    document.getElementById("expenseForm").reset();

    updateDashboard();
    updateTransactions();
    generateRecommendation();

});


// ===============================
// SET BUDGET
// ===============================

document.getElementById("budgetForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const budget = Number(
        document.getElementById("budgetAmount").value
    );

    if (budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    monthlyBudget = budget;

    document.getElementById("budgetForm").reset();

    updateDashboard();
    generateRecommendation();

    alert("Monthly budget set successfully!");

});


// ===============================
// UPDATE DASHBOARD
// ===============================

function updateDashboard() {

    const remainingBalance =
        totalIncome - totalExpense;

    const remainingBudget =
        monthlyBudget - totalExpense;

    document.getElementById("totalIncome").textContent =
        formatCurrency(totalIncome);

    document.getElementById("totalExpense").textContent =
        formatCurrency(totalExpense);

    document.getElementById("remainingBalance").textContent =
        formatCurrency(remainingBalance);

    document.getElementById("monthlyBudget").textContent =
        formatCurrency(monthlyBudget);

}


// ===============================
// UPDATE TRANSACTIONS
// ===============================

function updateTransactions() {

    const table =
        document.getElementById("transactionTable");

    table.innerHTML = "";

    if (transactions.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="4">
                    No transactions yet
                </td>
            </tr>
        `;

        return;
    }

    transactions.forEach(function(transaction) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.type}</td>
            <td>${transaction.category}</td>
            <td>${transaction.description}</td>
            <td>${formatCurrency(transaction.amount)}</td>
        `;

        table.appendChild(row);

    });

}


// ===============================
// AI RECOMMENDATION
// ===============================

function generateRecommendation() {

    const recommendation =
        document.getElementById("aiRecommendation");

    if (totalIncome === 0 && totalExpense === 0) {

        recommendation.textContent =
            "Add your income and expenses to receive personalized recommendations.";

        return;
    }

    if (monthlyBudget === 0) {

        recommendation.textContent =
            "💡 Set a monthly budget to receive better spending recommendations.";

        return;
    }

    const percentage =
        (totalExpense / monthlyBudget) * 100;


    if (percentage >= 100) {

        recommendation.textContent =
            "⚠️ Your expenses have exceeded your monthly budget. Try reducing unnecessary spending.";

    }

    else if (percentage >= 80) {

        recommendation.textContent =
            "⚠️ You have used more than 80% of your budget. Monitor your remaining expenses carefully.";

    }

    else if (percentage >= 50) {

        recommendation.textContent =
            "💡 You have used more than half of your budget. Continue monitoring your spending.";

    }

    else {

        recommendation.textContent =
            "✅ Your spending is currently within your budget. Keep tracking your expenses and maintain your savings.";

    }

}


// ===============================
// CURRENCY FORMAT
// ===============================

function formatCurrency(amount) {

    return "₹" + amount.toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });

}


// ===============================
// INITIAL DASHBOARD
// ===============================

updateDashboard();
updateTransactions();
generateRecommendation();