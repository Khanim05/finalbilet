import products from "../model/model.js"


export const addproduct=async (req,res)=>{
    try {
        let newprod=new products(req.body)
        await newprod.save()
        res.status(200).send(newprod)
    } catch (error) {
        res.status(500).send('error')
    }
}

export const delproduct=async (req,res)=>{
    let {id}=res.params
    try {
        let findProd=await products.findByIdAndDelete(id)
        res.status(200).send('delete Product')
    } catch (error) {
        res.status(500).send('error')
    }
}

export const getproduct=async (req,res)=>{
    try {
        let prod=await products.find()
        res.status(200).send(prod)
    } catch (error) {
        res.status(500).send('error')
    }
}