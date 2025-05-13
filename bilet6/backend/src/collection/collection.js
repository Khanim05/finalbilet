import products from "../model/model.js"


export const addProduct= async(req,res)=>{
    try {
        let newprod=new products(req.body)
        await newprod.save()
        res.status(200).send(newprod)
    } catch (error) {
        res.status(500).send('error')
    }
}


export const delProduct= async(req,res)=>{
    let {id}=req.params
    try {
        let findProd= await products.findByIdAndDelete(id)
        if (!findProd) {
            res.status(400).send("undefined")
        }
        res.status(200).send("delete")
    } catch (error) {
        res.status(500).send('error')
    }
}


export const getProduct=async(req,res)=>{
    try {
        const prod=await products.find()
        res.status(200).send(prod)
    } catch (error) {
        res.status(500).send('error')
    }
}