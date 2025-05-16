import products from "../model/model.js"

export const addProduct=async (req,res)=>{
    try {
        let newprod=new products(req.body)
        res.status(200).send(newprod)
        await newprod.save()
    } catch (error) {
        res.status(500).send("error")
    }
}






export const delProduct=async (req,res)=>{
    const {id}=req.params
    try {
        let findProd=await products.findByIdAndDelete(id)
        if (!findProd) {
            res.status(400).send('undefined')
        }
        res.status(200).send("delete product")
    } catch (error) {
        res.status(500).send("error")
    }
}


export const getProduct=async (req,res)=>{

    try {
        let product=await products.find()
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send("error")
    }
}


