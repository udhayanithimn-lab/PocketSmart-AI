# Phase 6 – Project Testing

## Project Name
PocketSmart AI

## Objective
To test the PocketSmart AI application and verify that all major features work correctly.

## Test Cases

| Test ID | Feature | Test Input | Expected Result |
|---|---|---|---|
| TC01 | Add Income | ₹20,000 | Income should show ₹20,000 |
| TC02 | Add Expense | ₹2,000 | Expense should show ₹2,000 |
| TC03 | Calculate Balance | Income ₹20,000, Expense ₹2,000 | Balance should show ₹18,000 |
| TC04 | Set Budget | ₹10,000 | Monthly budget should show ₹10,000 |
| TC05 | Add Food Expense | ₹1,000 | Food transaction should appear |
| TC06 | Add Shopping Expense | ₹2,000 | Shopping transaction should appear |
| TC07 | Budget Recommendation | Expense below budget | Recommendation should be displayed |
| TC08 | Budget Warning | Expense above 80% of budget | Warning recommendation should be displayed |
| TC09 | Invalid Income | ₹0 | Error message should appear |
| TC10 | Invalid Expense | ₹0 | Error message should appear |