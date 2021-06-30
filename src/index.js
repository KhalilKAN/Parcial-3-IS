const app = require('./app');
const config = require("./config/config");
app.set("port", config.PORT);
//Starting
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'))
})

