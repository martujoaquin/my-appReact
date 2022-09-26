import React, { useState } from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Navbar = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');

        getDocs(collectionCat).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, []);
    return (
        <nav className={props.isFooter ? estilos.nav : estilos.footer}>
            <Link to="/">Tienda de Ropa</Link>
            <Link to="/category/remeras">Remeras</Link>
            <Link to="/category/gorras">Gorras</Link>
            <Link to="/category/camisas">Camisas</Link>
            <ul>
                <>
                {categories.map((cat)=>(
                    <NavLink key={cat.id} to={`/category/${cat.route}`}>
                        {cat.name}
                    </NavLink>
                ))}
                </>
            </ul>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </nav>
    );
};

export default Navbar;