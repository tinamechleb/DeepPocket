-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-03-10 17:22:23.176

-- tables
-- Table: categories
CREATE TABLE `categories`
(
    `id`       int          NOT NULL AUTO_INCREMENT,
    `name`     varchar(255) NOT NULL,
    `users_id` int          NOT NULL,
    UNIQUE INDEX `user_id_name` (`name`, `users_id`),
    CONSTRAINT `categories_pk` PRIMARY KEY (`id`)
) ENGINE InnoDB;

-- Table: currencies
CREATE TABLE `currencies`
(
    `id`      int          NOT NULL AUTO_INCREMENT,
    `country` varchar(255) NOT NULL,
    `symbol`  varchar(5)   NOT NULL,
    `name`    varchar(255) NOT NULL,
    `code`    varchar(3)   NOT NULL,
    UNIQUE INDEX `currency_country` (`country`),
    UNIQUE INDEX `currency_code` (`code`),
    CONSTRAINT `currencies_pk` PRIMARY KEY (`id`)
) ENGINE InnoDB;

-- Table: transactions
CREATE TABLE `transactions`
(
    `id`            int          NOT NULL AUTO_INCREMENT,
    `title`         mediumtext   NOT NULL,
    `description`   longtext     NOT NULL,
    `amount`        double(8, 2) NOT NULL,
    `categories_id` int          NOT NULL,
    `start_date`    datetime     NOT NULL,
    `end_date`      datetime     NULL,
    `users_id`      int          NOT NULL,
    `interval`      tinytext     NULL,
    `type`          tinytext     NOT NULL,
    `currencies_id` int          NOT NULL,
    CONSTRAINT `transactions_pk` PRIMARY KEY (`id`)
) ENGINE InnoDB;

-- Table: users
CREATE TABLE `users`
(
    `id`            int          NOT NULL AUTO_INCREMENT,
    `name`          varchar(255) NOT NULL,
    `email`         varchar(255) NOT NULL,
    `password`      varchar(255) NOT NULL,
    `image`         varchar(255) NULL,
    `currencies_id` int          NOT NULL,
    UNIQUE INDEX `user_email` (`email`),
    UNIQUE INDEX `user_image` (`image`),
    CONSTRAINT `users_pk` PRIMARY KEY (`id`)
) ENGINE InnoDB;

-- views
-- View: Expenses
CREATE VIEW `Expenses` AS
SELECT transactions.*,
       users.name,
       users.email,
       users.image,
       currencies.id      AS transaction_currency_id,
       currencies.country AS transaction_currency_country,
       currencies.symbol  AS transaction_currency_symbol,
       currencies.name    AS transaction_currency_name,
       currencies.code    AS transaction_currency_code


FROM transactions,
     users,
     currencies
WHERE type = "expense"
  AND users.id = transactions.users_id;

-- View: Incomes
CREATE VIEW `Incomes` AS
SELECT transactions.*,
       users.name,
       users.email,
       users.image,
       currencies.id      AS transaction_currency_id,
       currencies.country AS transaction_currency_country,
       currencies.symbol  AS transaction_currency_symbol,
       currencies.name    AS transaction_currency_name,
       currencies.code    AS transaction_currency_code


FROM transactions,
     users,
     currencies
WHERE type = "income"
  AND users.id = transactions.users_id;

-- View: Saving_goals
CREATE VIEW `Saving_goals` AS
SELECT transactions.*,
       users.name,
       users.email,
       users.image,
       currencies.id      AS transaction_currency_id,
       currencies.country AS transaction_currency_country,
       currencies.symbol  AS transaction_currency_symbol,
       currencies.name    AS transaction_currency_name,
       currencies.code    AS transaction_currency_code


FROM transactions,
     users,
     currencies
WHERE type = "saving"
  AND users.id = transactions.users_id;

-- foreign keys
-- Reference: Categories_Users (table: categories)
ALTER TABLE `categories`
    ADD CONSTRAINT `Categories_Users` FOREIGN KEY `Categories_Users` (`users_id`)
        REFERENCES `users` (`id`);

-- Reference: Transactions_Categories (table: transactions)
ALTER TABLE `transactions`
    ADD CONSTRAINT `Transactions_Categories` FOREIGN KEY `Transactions_Categories` (`categories_id`)
        REFERENCES `categories` (`id`);

-- Reference: Transactions_Currencies (table: transactions)
ALTER TABLE `transactions`
    ADD CONSTRAINT `Transactions_Currencies` FOREIGN KEY `Transactions_Currencies` (`currencies_id`)
        REFERENCES `currencies` (`id`);

-- Reference: Transactions_Users (table: transactions)
ALTER TABLE `transactions`
    ADD CONSTRAINT `Transactions_Users` FOREIGN KEY `Transactions_Users` (`users_id`)
        REFERENCES `users` (`id`);

-- Reference: Users_Currencies (table: users)
ALTER TABLE `users`
    ADD CONSTRAINT `Users_Currencies` FOREIGN KEY `Users_Currencies` (`currencies_id`)
        REFERENCES `currencies` (`id`);

-- End of file.

