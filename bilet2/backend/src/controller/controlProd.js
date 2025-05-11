import products from "../modul/modul.js"

export const addProduct=async (req,res)=>{
    try {
       let newProd=new products(req.body)
       await newProd.save()

       res.status(200).send({message:"Create product", data: newProd})
    } catch (error) {
        res.status(500).send("error")
    }
}
export const getProduct=async (req,res)=>{
    try {
        let findProd= await products.find()
        if (!findProd) {
            res.status(400).send("not found product")
        }
       res.status(200).send(findProd)
    } catch (error) {
        res.status(500).send("error")
    }
       

}
export const deleteProduct=async (req,res)=>{
    let {id}=req.params
    try {
        let findProduct=await products.findByIdAndDelete(id)
        if (!findProduct) {
            res.status(400).send("Product undefined")
        }
       res.status(200).send("Product deleted")
    } catch (error) {
        res.status(500).send("error")
    }
       

}