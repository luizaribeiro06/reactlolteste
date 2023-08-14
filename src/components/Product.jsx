import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">R${item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Veja mais</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5">
                    <div className="container">
                        <div className="col-md-6">
                            {DATA.map(cardItem)}
                            <p>lololo</p>
                        </div>
                    </div>
                    
                </div>
                </div>
                )
}

                export default Product
