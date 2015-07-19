# Single Page App

### Bookmarks
* http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
* https://facebook.github.io/react/docs/thinking-in-react.html
* https://github.com/Hacker0x01/react-datepicker
* http://babeljs.io/blog/2015/06/07/react-on-es6-plus/
*

### Component Hierarchy

* Ledger
  * LoginStatus
  * CategoryList
  * DateRangeCriteria
  * TransactionTable
    * TransactionTableHeader
    * TransactionRow

### JSON Sample

```json
[
  {
    "id": "xxxx",
    "txnDate": "20000101T00:00:00",
    "txnYear": 2000,
    "txnMonth": 1,
    "txnDay": 1,
    "description": "sample description",
    "originalDescription": "sample original description",
    "amount": 123.45,
    "txnType": "txn type",
    "accountName": "account name",
    "labels": "label1 label2 label3",
    "notes": "sample notes",
    "categoryId": "xxxx",
    "categoryName": "sample category name"
  },
  {
    ...
  }
]
```

### Component Props

* Username
* Category List (id, name)
* Column Label List
* Transaction List (id, txnDate, txnYear, txnMonth, txnDay, description, originalDescription, amount, txnType, accountName, ...)

### UI State

* Start date (default: today - 6m)
* End date (default: today)
* Currently selected category (default: 0)
* Filtered list of transactions

### Reference

* Install new packages:

```
$ npm install --save-dev ${PACKAGE_NAME}
```

* Start dev server

```
$ npm start
```

* Build deployable package

```
$ npm build
```
