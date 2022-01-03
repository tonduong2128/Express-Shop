class DetailController{
    index(req, res, next){
        return res.redirect('/')
    }
    show(req, res, next){
        return res.render('pages/detail',{id: req.params.id})
    }
}
export default new DetailController();