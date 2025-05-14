import products from "../model/model.js"

export const addProduct=async (req,res)=>{
    try {
        let newprod= new products(req.body)
        await newprod.save()
        res.status(200).send(newprod)
    } catch (error) {
        res.status(500).send('error')
    }
}

export const delProduct=async (req,res)=>{
    let {id}=req.params
    
    try {
    let findprod=await products.findByIdAndDelete(id)
    res.status(200).send({message:'delete', data:findprod})
    } catch (error) {
        res.status(500).send('error')
    }
}
export const getProduct=async (req,res)=>{
    try {
        let getprod=await products.find()
        res.status(200).send(getprod)
    } catch (error) {
        res.status(500).send('error')
    }
}




