# Single Page App

### References
* http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
* https://facebook.github.io/react/docs/thinking-in-react.html
* https://github.com/Hacker0x01/react-datepicker

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
