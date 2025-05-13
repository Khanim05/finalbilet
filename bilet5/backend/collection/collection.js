import products from "../src/model/model.js"


export const addProduct= async(req,res)=>{
    try {
        let newprod=new products(req.body)
        await newprod.save()

        res.status(200).send(newprod)
    } catch (error) {
        res.status(500).send("error")
    }
}

export const delProduct= async(req,res)=>{
    let {id}=req.params
    try {
        let findprod=await products.findByIdAndDelete(id)
        if (!findprod) {
            res.status(400).send("undefined")
        }
        res.status(201).send("deleted")
    } catch (error) {
        res.status(500).send("error")
    }
}


export const getProduct= async(req,res)=>{
    try {
        let product=await products.find()

        res.status(200).send(product)
    } catch (error) {
        res.status(500).send("error")
    }
}