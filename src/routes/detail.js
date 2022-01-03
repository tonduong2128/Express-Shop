import express from 'express'
const Router = express.Router();

Router.get('/:id', (req, res, next)=>{
    console.log(req.params.id)
    res.render('pages/payment',{id: req.params.id})
})

export default Router; 