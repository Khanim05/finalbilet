import jevelin from "../model/model.js"

export const addprod = async (req, res) => {
  try {
    let newprod = new jevelin(req.body)
    await newprod.save()
    res.status(201).send(newprod)
  } catch (error) {
    res.status(500).send('error')
  }
}

export const delprod = async (req, res) => {
  let { id } = req.params
  try {
    let findProd = await jevelin.findByIdAndDelete(id)
    res.status(200).send('delete')
  } catch (error) {
    res.status(500).send('error')
  }
}


export const getprod = async (req, res) => {
  try {
    let product = await jevelin.find()
    res.status(200).send(product)
  } catch (error) {
    res.status(500).send('error')
  }
}
