import bilet3 from "../model/model.js"

export const addProduct=async (req,res)=>{
    try {
    let newProd=new bilet3(req.body)

    await newProd.save()

    res.status(200).send({message:"product create", data:newProd})

    } catch (error) {
        res.status(500).send("error")
    }


}

export const deletePrdct=async (req,res)=>{
    let {id}=req.params
    try {
        let delProd=await bilet3.findByIdAndDelete(id)

        if (!delProd) {
            res.status(400).send("undefined")
        }

        res.status(201).send("delete")
    } catch (error) {
        res.status(500).send("error")
    }
}

export const getPrdct=async (req,res)=>{
    try {
        let getPrdct= await bilet3.find()
        if (!getPrdct) {
            res.status(400).send("not found")
        }
        res.status(201).send(getPrdct)
    } catch (error) {
        res.status(500).send("error")
    }
}