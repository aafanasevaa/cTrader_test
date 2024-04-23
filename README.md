# cTrader_test

## Readme in English

## 🏗️ Installation

1. Clone this repository to your local machine:
`git clone https://github.com/aafanasevaa/cTrader_test/`

2. Navigate to the project directory:
`cd <repository_folder>`

3. Install dependencies using npm:
`npm install`

4. Please make sure you have dotenv installed:
 `npm i dotenv`

> [!NOTE]
> The repository can be cloned directly through the IDE and the tests can be run in IDE terminal.


***

## 🌲 Project Structure
The tests are organized under the '**tests**' directory. Inside 'tests' directory 2 folders exist: <br />
 - 'page-objects' for the page objects files, <br />
 - 'tests' for the tests. <br />
 <br />

Inside the 'page-objects' folder the **pageManager.ts** file exists. **pageManager.ts** file is needed to remove the duplication of the instances of page objects inside tests - 
all instances of the pages are built in the single place (**pageManager.ts**) file.
<br />
<br />
<img width="652" alt="Снимок экрана 2024-04-23 в 7 59 48 PM" src="https://github.com/aafanasevaa/cTrader_test/assets/93313607/f7f216b6-cc2b-4d5a-9578-199c3fc53aea">

<br />
<br />

**Fixtures** are kept in fixtures.ts file. Page fixture is overriden + pageManager fixture is created.


***

### 🛠️ Running test

Before running test please update the .env file with the correct credentials (they are not added to the repository as it is public).
<br />
<br />
The .env file should look as below with **no spaces**: <br />
<br />
EMAIL=value1<br />
PASSWORD=value2

<br />

Several commands are configured to run the test:<br />
<br />
     `tests-chrome`: - allows to run test on chromium only <br />
     <br />
    `tests-firefox`: - allows to run test on firefox only <br />
    <br />
     `tests-all`: - allows to run tests in chromium and firefox (1 by 1) <br />
     <br />
     `tests-all-parallel`: - allows to run tests in chromium and firefox in parallel
<br />
<br />

> [!TIP]
> Don't forget to put `npm run` before the command! Full command example: `npm run tests-all`
***

### 💹 Test Results
<br />
Run the following command to see the results of the test: `npx playwright show-report`
<br />
The results of the test run look as per below:
<br />
<br />
<img width="1001" alt="Снимок экрана 2024-04-23 в 3 15 36 PM" src="https://github.com/aafanasevaa/cTrader_test_task/assets/93313607/d3eb59af-9056-4978-ade4-6ddb631138e9">


If a test failed it will be retried one time.
***


## Readme in Russian

## 🏗️ Установка

1. Клонируйте этот репозиторий на свой локальный компьютер:
`git clone https://github.com/aafanasevaa/cTrader_test/`

2. Перейдите в директорию проекта:
`cd <repository_folder>`

3. Установите зависимости:
`npm install`

4. Убедитесь, что у вас установлен dotenv:
 `npm i dotenv`


> [!NOTE]
> Репозиторий можно клонировать напрямую через IDE, и тесты можно запускать в терминале IDE.


***

## 🌲 Структура проекта
Tесты организованы в директории **'tests'**. Внутри директории 'tests' существуют 2 папки: <br />
 - 'page-objects' для page objects, <br />
 - 'tests' для тестов. <br />
 <br />

Внутри папки 'page-objects' существует файл pageManager.ts. Файл pageManager.ts необходим для устранения дублирования инстансов page objects внутри тестов -
все page objects создаются в одном месте (**pageManager.ts**) файле.
<br />
<br />
<img width="652" alt="Снимок экрана 2024-04-23 в 7 59 48 PM" src="https://github.com/aafanasevaa/cTrader_test/assets/93313607/f7f216b6-cc2b-4d5a-9578-199c3fc53aea">

<br />
<br />

**Фикстуры** хранятся в файле fixtures.ts. Page fixture переопределена + cоздана pageManager fixture.

***

### 🛠️ Запуск теста

Перед запуском теста необходимо добавить значения имейла и пароля в файл .env (они не добавлены в репозиторий, так как он публичный).
<br />
<br />
Файл .env должен выглядеть следующим образом **без пробелов**: <br />
<br />
EMAIL=значение1<br />
PASSWORD=значение2

<br />

Настроены несколько команд для запуска теста:<br />
<br />
     `tests-chrome`: - позволяет запустить тест только на хроме <br />
     <br />
    `tests-firefox`: - позволяет запустить тест только на фаерфоксе <br />
    <br />
     `tests-all`: - позволяет запустить тесты в хроме и фаерфоксе (поочередно) <br />
     <br />
     `tests-all-parallel`: - позволяет запустить тесты в хроме и фаерфоксе параллельно
<br />
<br />

> [!TIP]
> Не забудьте добавить `npm run` перед командой! Пример полной команды: `npm run tests-all`
***

### 💹 Результаты теста
<br />
Данная команда позволяет просмотреть результаты теста: `npx playwright show-report`
<br />
Результаты запуска теста выглядят следующим образом:
<br />
<br />
<img width="1001" alt="Снимок экрана 2024-04-23 в 3 15 36 PM" src="https://github.com/aafanasevaa/cTrader_test_task/assets/93313607/d3eb59af-9056-4978-ade4-6ddb631138e9">


Если тест упал, он будет перезапущен один раз.
***
