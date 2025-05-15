import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addBasket } from "../../redux/features/basket"
import './detail.css'
import { FaStar } from "react-icons/fa";
<FaStar />




const Detail = () => {
  let {id}=useParams()
  let {products}=useSelector(p=>p.product)
  let findProd=products.find(p=>p._id===id)
  let dispatch=useDispatch()

  return (
    <div id="detail-area">
       <div className="cards" >
              <img src={findProd.image} alt="" className='image' />
              <div className="content">
                <h5 className='title'>{findProd.title}</h5>
                <p className='text'>{findProd.text}</p>
                <h5 className='price'>${findProd.price}</h5>
                <div className="icon-area">
                       <FaStar  className="star-icon"/>
                       <FaStar  className="star-icon"/>
                       <FaStar  className="star-icon"/>
                       <FaStar className="star-icon" />
                       <FaStar  className="star-icon"/>
                </div>
                <p className="desc">{findProd.description}</p>
                <button className='addBasket'
                onClick={(e)=>{
                  e.stopPropagation();
                  dispatch(addBasket(products))
                }}
                >Add basket</button>
              </div>
            </div>
    </div>
  )
}

export default Detail
