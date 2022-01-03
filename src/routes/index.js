import RouterDetail from './detail.js'

function routes(app){
    app.use('/detail', RouterDetail)
    app.use('/', (req, res, next) => {
       return res.render('home')
    })
}
export default routes; 