<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>PocketSmart AI - Smart Budget Assistant</title>

    <!-- CSS File -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ================= HEADER ================= -->
    <header class="header">
        <div class="logo">
            💰 PocketSmart AI
        </div>

        <nav class="navbar">
            <a href="#dashboard">Dashboard</a>
            <a href="#transactions">Transactions</a>
            <a href="#budget">Budget</a>
            <a href="#recommendations">AI Recommendations</a>
        </nav>
    </header>


    <!-- ================= MAIN CONTENT ================= -->
    <main class="container">

        <!-- Welcome Section -->
        <section class="welcome">
            <h1>Welcome to PocketSmart AI 👋</h1>
            <p>
                Your Smart Budget & Recommendation Assistant
            </p>
            <p class="subtitle">
                Track your income, manage expenses and make smarter budgeting decisions.
            </p>
        </section>


        <!-- ================= DASHBOARD ================= -->
        <section id="dashboard">

            <h2>📊 Financial Dashboard</h2>

            <div class="dashboard-cards">

                <!-- Income Card -->
                <div class="card income-card">
                    <div class="card-icon">💵</div>
                    <h3>Total Income</h3>
                    <p id="totalIncome">₹0</p>
                </div>

                <!-- Expense Card -->
                <div class="card expense-card">
                    <div class="card-icon">💸</div>
                    <h3>Total Expenses</h3>
                    <p id="totalExpense">₹0</p>
                </div>

                <!-- Balance Card -->
                <div class="card balance-card">
                    <div class="card-icon">💰</div>
                    <h3>Remaining Balance</h3>
                    <p id="remainingBalance">₹0</p>
                </div>

                <!-- Budget Card -->
                <div class="card budget-card">
                    <div class="card-icon">🎯</div>
                    <h3>Remaining Budget</h3>
                    <p id="remainingBudget">₹0</p>
                </div>

            </div>

        </section>


        <!-- ================= ADD INCOME ================= -->
        <section class="form-section">

            <h2>💵 Add Income</h2>

            <form id="incomeForm">

                <div class="form-group">
                    <label for="incomeAmount">
                        Income Amount
                    </label>

                    <input
                        type="number"
                        id="incomeAmount"
                        placeholder="Enter income amount"
                        min="0"
                        step="0.01"
                        required
                    >
                </div>

                <div class="form-group">
                    <label for="incomeSource">
                        Income Source
                    </label>

                    <select id="incomeSource" required>
                        <option value="">Select source</option>
                        <option value="Salary">Salary</option>
                        <option value="Pocket Money">Pocket Money</option>
                        <option value="Business">Business</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="incomeDate">
                        Date
                    </label>

                    <input
                        type="date"
                        id="incomeDate"
                        required
                    >
                </div>

                <button type="submit" class="primary-btn">
                    + Add Income
                </button>

            </form>

        </section>


        <!-- ================= ADD EXPENSE ================= -->
        <section class="form-section">

            <h2>💸 Add Expense</h2>

            <form id="expenseForm">

                <div class="form-group">
                    <label for="expenseAmount">
                        Expense Amount
                    </label>

                    <input
                        type="number"
                        id="expenseAmount"
                        placeholder="Enter expense amount"
                        min="0"
                        step="0.01"
                        required
                    >
                </div>

                <div class="form-group">
                    <label for="expenseCategory">
                        Category
                    </label>

                    <select id="expenseCategory" required>

                        <option value="">
                            Select category
                        </option>

                        <option value="Food">
                            🍔 Food
                        </option>

                        <option value="Travel">
                            🚌 Travel
                        </option>

                        <option value="Shopping">
                            🛍️ Shopping
                        </option>

                        <option value="Education">
                            📚 Education
                        </option>

                        <option value="Entertainment">
                            🎬 Entertainment
                        </option>

                        <option value="Bills">
                            🧾 Bills
                        </option>

                        <option value="Health">
                            🏥 Health
                        </option>

                        <option value="Other">
                            📦 Other
                        </option>

                    </select>
                </div>

                <div class="form-group">
                    <label for="expenseDescription">
                        Description
                    </label>

                    <input
                        type="text"
                        id="expenseDescription"
                        placeholder="Example: Lunch"
                        maxlength="100"
                    >
                </div>

                <div class="form-group">
                    <label for="expenseDate">
                        Date
                    </label>

                    <input
                        type="date"
                        id="expenseDate"
                        required
                    >
                </div>

                <button type="submit" class="primary-btn">
                    + Add Expense
                </button>

            </form>

        </section>


        <!-- ================= BUDGET ================= -->
        <section id="budget" class="form-section">

            <h2>🎯 Set Monthly Budget</h2>

            <form id="budgetForm">

                <div class="form-group">

                    <label for="budgetAmount">
                        Monthly Budget
                    </label>

                    <input
                        type="number"
                        id="budgetAmount"
                        placeholder="Example: 10000"
                        min="0"
                        step="0.01"
                        required
                    >

                </div>

                <div class="form-group">

                    <label for="budgetMonth">
                        Month
                    </label>

                    <input
                        type="month"
                        id="budgetMonth"
                        required
                    >

                </div>

                <button type="submit" class="primary-btn">
                    🎯 Set Budget
                </button>

            </form>

        </section>


        <!-- ================= TRANSACTIONS ================= -->
        <section id="transactions" class="transactions-section">

            <h2>📋 Recent Transactions</h2>

            <div class="table-container">

                <table>

                    <thead>

                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Category / Source</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>

                    </thead>

                    <tbody id="transactionTable">

                        <tr>
                            <td colspan="5">
                                No transactions yet.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </section>


        <!-- ================= SPENDING ANALYSIS ================= -->
        <section class="analysis-section">

            <h2>📈 Spending Analysis</h2>

            <div class="analysis-container">

                <div class="analysis-card">

                    <h3>Highest Spending Category</h3>

                    <p id="highestCategory">
                        No data available
                    </p>

                </div>

                <div class="analysis-card">

                    <h3>Total Transactions</h3>

                    <p id="transactionCount">
                        0
                    </p>

                </div>

                <div class="analysis-card">

                    <h3>Average Expense</h3>

                    <p id="averageExpense">
                        ₹0
                    </p>

                </div>

            </div>

        </section>


        <!-- ================= AI RECOMMENDATION ================= -->
        <section id="recommendations" class="recommendation-section">

            <h2>🤖 PocketSmart AI Recommendations</h2>

            <div class="ai-box">

                <div class="ai-icon">
                    🤖
                </div>

                <div class="ai-content">

                    <h3>Smart Financial Suggestion</h3>

                    <p id="aiRecommendation">
                        Add your income, expenses and budget to receive
                        personalized recommendations from PocketSmart AI.
                    </p>

                </div>

            </div>

        </section>


        <!-- ================= FINANCIAL TIPS ================= -->
        <section class="tips-section">

            <h2>💡 Smart Budget Tips</h2>

            <div class="tips-container">

                <div class="tip-card">
                    <span>📊</span>
                    <h3>Track Expenses</h3>
                    <p>
                        Record your daily expenses to understand your
                        spending habits.
                    </p>
                </div>

                <div class="tip-card">
                    <span>🎯</span>
                    <h3>Set a Budget</h3>
                    <p>
                        Create a monthly budget and monitor your spending.
                    </p>
                </div>

                <div class="tip-card">
                    <span>💰</span>
                    <h3>Save Regularly</h3>
                    <p>
                        Try to maintain a portion of your income as savings.
                    </p>
                </div>

                <div class="tip-card">
                    <span>🤖</span>
                    <h3>Use AI Insights</h3>
                    <p>
                        Use PocketSmart AI recommendations to understand
                        your spending patterns.
                    </p>
                </div>

            </div>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->
    <footer class="footer">

        <h3>💰 PocketSmart AI</h3>

        <p>
            Your Smart Budget & Recommendation Assistant
        </p>

        <p>
            © 2026 PocketSmart AI. All Rights Reserved.
        </p>

    </footer>


    <!-- JavaScript File -->
    <script src="script.js"></script>

</body>
</html>