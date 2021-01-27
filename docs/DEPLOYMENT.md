
## Деплой
Для создания новой сид фразы при деплое из терминала:
```bash
yarn run mnemonic
```


### Деплой Remix
  - Переключить MetaMask в нужную сеть;
  - Пополнить баланс;
  - Открыть сайт [http://remix.ethereum.org/](http://remix.ethereum.org/);
  - Создать в Remix файл `FenumToken.sol` и скопировать в него содержимое файла `contracts/FenumToken.sol`;
  - Компиляция:
    - `COMPILER`: `0.7.6`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FenumToken.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FenumToken - browser/FenumToken.sol`;
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.7.6`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FenumToken.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.
  - Добавить токен в `MetaMask`:
    - `Assets`;
    - -> `Add Token`;
    - -> `Custom Token`;
    - -> Вставить адрес токена, подождать пока обновятся данные;
    - -> `Next`;
    - -> `Add Tokens`.


### Деплой Development
В отдельном терминале запустить `ganache-cli`:
```bash
yarn run ganache-cli
```

После этого деплой:
```bash
yarn run deploy development
```


### Деплой Mainnet
```bash
yarn run deploy mainnet
yarn run verify mainnet FenumToken
```


### Деплой Ropsten
```bash
yarn run deploy ropsten
yarn run verify ropsten FenumToken
```


### Деплой Kovan
```bash
yarn run deploy kovan
yarn run verify kovan FenumToken
```


### Деплой Rinkeby
```bash
yarn run deploy rinkeby
yarn run verify rinkeby FenumToken
```


### Деплой Goerli
```bash
yarn run deploy goerli
yarn run verify goerli FenumToken
```


### Публикация в NPM
После деплоя нужно опубликовать в [NPM](https://www.npmjs.com/).
```bash
npm publish
# или
yarn publish
```
