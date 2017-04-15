# ionic2-tslint-issue2577

### The Problem
When running `tslint --type-check -c tslint.json --project tsconfig.json`, `All imports are unused` error gets thrown on almost every file.

I want to use this in tandem with
```
"completed-docs": [
      true
] 
```
an older version of tslint throws deprecation errors for `no-unused-variable`.



### Running the project
```
npm i
npm run lint // alias for tslint --type-check -c tslint.json --project tsconfig.json
```


