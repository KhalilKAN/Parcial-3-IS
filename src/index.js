import app from './app'

//Starting
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'))
})

module.exports = {
    suma(a, b){
        return a+b;
    }
}