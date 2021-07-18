import React from 'react';
import data from '../data';

export default function Product() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {data.products.map(p =>
                    <div className="col">
                        <div className="card">
                            <img src={p.photo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description}</p>
                                <p className="card-text">ราคา {p.price} บาท</p>
                                <p className="card-text">{p.stock}</p>
                                <a href="#" className="btn btn-primary">+ เพิ่มลงตะกร้า</a>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}
