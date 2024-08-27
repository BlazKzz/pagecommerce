import React from 'react'
import './Ropaoversize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Ropaoversize = ({ imagenSrc1, imagenAlt1, imagenSrc2, imagenAlt2, imagenSrc3, imagenAlt3, imagenSrc4, imagenAlt4, imagenSrc5, imagenAlt5,}) => {
  return (
    <section className='ropa-oversize'>
        <div className='producto'>
            <img src={imagenSrc1} alt={imagenAlt1} />
            <h3>Polera oversize 1</h3>
            <p>$10.000</p>
            <div className='botones'>
                <button className="btn-comprar">Comprar</button>
                <button className="btn-icon"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="btn-icon"><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
        <div className="producto">
            <img src={imagenSrc2} alt={imagenAlt2} />
            <h3>Polera Oversize 2</h3>
            <p>$10.000</p>
            <div className='botones'>
                <button className="btn-comprar">Comprar</button>
                <button className="btn-icon"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="btn-icon"><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
            <div className="producto">
            <img src={imagenSrc3} alt={imagenAlt3} />
            <h3>Polera Oversize 3</h3>
            <p>$10.000</p>
            <div className='botones'>
                <button className="btn-comprar">Comprar</button>
                <button className="btn-icon"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="btn-icon"><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
        <div className="producto">
            <img src={imagenSrc4} alt={imagenAlt4} />
            <h3>Polera Oversize 4</h3>
            <p>$10.000</p>
            <div className='botones'>
                <button className="btn-comprar">Comprar</button>
                <button className="btn-icon"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="btn-icon"><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
        <div className='producto'>
            <img src={imagenSrc5} alt={imagenAlt5} />
            <h3>Polera Oversize 5</h3>
            <p>$10.000</p>
            <div className='botones'>
                <button className="btn-comprar">Comprar</button>
                <button className="btn-icon"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="btn-icon"><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    </section>
  )
}

export default Ropaoversize