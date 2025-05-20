import tasty from "../model/model.js"

export const addProd=async (req,res)=> {
    try { 
        let newProd=new tasty(req.body)
        await newProd.save()
        res.status(200).send(newProd)
    } catch (error) {
        res.status(500).send("error")
    }
}

export const delProd=async (req,res) => {
    let {id}=req.params
    try {
        const findProd=await tasty.findByIdAndDelete(id)
        res.status(200).send("delete")
    } catch (error) {
        res.status(500).send("error")
    }
}

export const getProd=async(req,res) => {
    try { 
        let products=await tasty.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send("error")
    }
}