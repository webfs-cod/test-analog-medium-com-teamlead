# test-analog-medium-com-teamlead

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## To start using project you should start json-server 
json-server is in node modules, but if you use linux perhaps you will 
need to install json-server globally
```
npm install -g json-server
```
```
json-server --watch db.json
```

## After you start project you will see the home page
there are two accounts in the project you can log in: 
reader and writer 
```
login: reader@mail.com
passsword: 123456
```
```
login: writer@mail.com
passsword: 123456
```

### Reader
Reader can only make claps on the cardsr
### Writer
Writer can create, edit and delete cards
