import RouterProduct from './product.js'


function routes(app){
    app.use('/products', RouterProduct)
    app.use('/', (req, res, next) => {
       return res.render('home')
    })
}
export default routes; 