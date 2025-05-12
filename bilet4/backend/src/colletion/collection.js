import bilet4 from "../model/model.js"


export const addProduct= async (req,res) =>{
    try {
        let newProd=new bilet4(req.body)

        await newProd.save()

        res.status(200).send({message:"Created", data:newProd})
    } catch (error) {
        res.status(500).send("Error")
    }
}

export const delProduct= async (req,res) =>{
    let {id}=req.params
    try {
        let findProd=await bilet4.findByIdAndDelete(id)
        if (!findProd) {
            res.status(400).send("UNDEFINED")
        }
        res.status(200).send("deleted")
    } catch (error) {
        res.status(500).send("Error")
    }
}


export const getProduct= async (req,res) =>{
    try {
        let getProd=await bilet4.find()
        res.status(200).send(getProd)
    } catch (error) {
        res.status(500).send("Error")
    }
}