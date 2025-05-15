import products from "../model/model.js"

export const addProduct=async (req,res)=>{
    try {
        let newProd=new products(req.body)
        await newProd.save()
        res.status(200).send(newProd)
    } catch (error) {
        res.status(500).send('error')
    }
}

export const delProduct=async (req,res)=>{
    let {id}=req.params
    try {
        let findProd=await products.findByIdAndDelete(id)
        if (!findProd) {
            res.status(400).send('undefined')
        }
        res.status(201).send('delete')
    } catch (error) {
        res.status(500).send('error')
    }
}


export const getProduct=async (req,res)=>{
    try {
        let product=await products.find()
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send('error')
    }
}