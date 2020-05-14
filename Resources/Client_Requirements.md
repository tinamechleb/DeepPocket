# Financial Tracker

## Detailed Problem Description

Nowadays, it is becoming more and more difficult to track one's finances. Purchasing goods has become one click away, making it harder to save money or start a budget.

## Expected solution description

A financial tracker solution is required. It consists of a web application where users can register / sign-up to create an account.

> Every user will be able to track his / her finances by performing the operation below :
* [ ] Create fixed incomes
* [ ] Create recurring incomes
* [ ] Create fixed expenses
* [ ] Create recurring expenses

#### Propreties
> Every `income` / `expense` can have a `title`, `description`, `amount`, `currency`, `date time` and `category` (selection from a `list` of categories that the `user creates`).

#### Constraint
* [ ] Every `income` / `expense` can be `created` in the `past` or `present`. but `not` in the `future`.

* [ ] When `creating` a `recurring` income or expense, the user can define when it started (it could have started in the past) and / or when it will end in the future.

* [ ] All recurring incomes and expenses can be updated along the way.

#### Example
```
the user can create his / her salary as income to be defined as 1000$ per month that started on 1/1/2018. The user can also update it to indicate that on 1/6/2018 the salary was modified to be 1200$.
```
---
## Filtering

#### Features

> Users should be able to view the below reports

* [ ] Yearly view of expenses and incomes
* [ ] Monthly view of expenses and incomes
* [ ] Weekly view of expenses and incomes

#### Filtering The View
> The user should have the possibility to `display` the above reports in either `pie charts` or
`bar charts`
* Every bar / chart represents a category (each category will have a color).
---
## Saving Goal

#### Features
> The user can create a goal saving. The `user` will have to `define` if the goal saving will be `achieved` by `weekly` or `monthly` savings.

#### Propreties
> Goal saving consists of a `title`, `total amount`, `currency` and `due date`.

#### Constraint
1. The web application should validate if the proposed saving plan is achievable: the existing total expenses along with the saving, `should not exceed the total income amounts`.


2. If the proposed plan is validated, the user can confirm and save the saving plan, which will be `created` as a `special type` goal `saving expense`.

> During the creation of another saving plan, all previously created goal savings will be counted in the total expenses.

3. When calculating the total amount of the incomes or expenses, the indicated currencies should be taken into account, meaning that the web application can have / pick a base currency and all other foreign currencies will be converted to calculate the sum.

> The candidate can set the currencies rates to be fixed, however it would be a bonus if they can be fetched online every time they are required.

#### Example
The user would like to buy the new iPhone which costs 1000$. The user creates a goal saving by setting monthly savings of 100$ along with the start date.

---
## Bonus Challenge

The web application will have Artificial Intelligence, where it can propose to the user how the saving plan can be achieved.

#### Example
The user creates a goal saving plan by setting the total amount required, currency and the due date. By indicating the priority as a drop down (either time or money), the web application will study what is best saving amount and frequency (weekly or monthly) to either help the user achieve the saving plan the soonest (time is priority) and before the due date, or the way with less financial impact (money is priority) by setting the smallest amount possible while still respecting the due date. All in all, the total expenses including the proposed saving plan should never exceed the total income.

## Deliverable Format

The candidate should deliver a web application as described in the expected solution section.

## Rules and Guidelines

#### Mandatory
* All the business rules and requirements are very important and should be amended (unless otherwise stated or communicated).

#### Design
* There are no restrictions on the user interface and design, it just needs to be user friendly and intuitive.

#### External Dependencies
* The candidate should not be using packages or libraries that achieves / solves a key requirement of the solution.

> For example, `the candidate cannot be using a library that is used to store incomes and expenses to perform calculations of any sort.`
However, the candidate can be using packages to render pie or bar charts for the repots.

## Evaluation Criteria

The evaluation criteria are divided into 2 main parts:

1. Overall project completion :
> * All the business rules and requirements should be achieved and met.
> * The solution should have the functional work flow as described in the expected solution.
> * The solution should be working properly and provided the expected results.

2. The code is to be examined to check for the good programming practices, including but not limited to :
> * Performance optimization,
> * Secure coding,
> * OOP (Object-oriented programming).
> * Re-usability and maintainability.
