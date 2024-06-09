import img from '../../assets/images/products/msi-gamer.jpg'
import style from '../../assets/style/card.module.css'
import { BsFillStarFill } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/features/ShopSlice';
const Card = ({ product }) => {
    const dispatch=useDispatch()
    // let star=[]
    // for (let i = 0; i < product.rate; i++) {
    //    star.push(<BsFillStarFill/>)
    //star=[...star,<BsFillStarFill/>]
    // }
    return (
        <article className={style.card}>
            <img className={style.cardImage} src={product.cover} alt={product.name} />
            <div className={style.description}>
                <h4 className={style.name}>{product.name}</h4>
                <span className={style.category}> {product.category}</span>
                <h5 className={style.brand}>{product.brand}</h5>
                <p className={style.rating}>
                    {[...Array(product.rate)].map((star,index)=>(
                        <BsFillStarFill key={index}/>
                    ))}

                </p>
                <span className={style.price}>{product.price}DT</span>
            </div>
            <div className={style.add} onClick={()=>dispatch(addProduct(product))}>
                <span> Add product</span>
                <BsCartPlusFill />
            </div>
        </article>
    )
}

export default Card