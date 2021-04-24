# wasmer-as

To test out, make changes to the `assembly/index.js` file. To publish changes run:

```
npm run script:publish
```

The response will look similar to:

```
201 Created
Script ID: 12
```

Visit `http://scripts-engine.herokuapp.com/script/<Script ID>` to trigger the script. The page response will be blank.

To see charges added visit: https://billing-engine.herokuapp.com/charges

---

An initial script has been added at: http://scripts-engine.herokuapp.com/script/11 which will create a single charge:

```
<id> => 15 CAD - Application fee
```
