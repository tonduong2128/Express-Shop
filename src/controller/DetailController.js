import Product from '../model/Product.js'
import fs from 'fs'

class ProductController{
    async index(req, res){
        const products = await Product.find({})
        return res.json(products)
    }
    async show(req, res){
        const product = await Product.findOne({_id: req.params.id})
        return res.json(product)
    }
    async create(req, res){
        req.body.image = req.file.filename 
        const post = new Product(req.body)
        post.save()
        return res.json({message:"1"})        
    }
    async update(req, res){
        const id = req.params.id
        const product = await Product.findOne({_id: id})
        // fs.unlinkSync("/src/uploads/" + product.image)
        req.body.image = req.file.filename
        await Product.updateOne({_id:id}, req.body);
        return res.json({message:"1"})        
    }
}
export default new ProductController();