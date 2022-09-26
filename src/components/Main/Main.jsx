import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Item from '../Item/Item';
import estilos from './main.module.css';
import Cart from '../Cart/Cart';
import ItemList from '../ItemList/ItemList';

const Main = () => {
    return (
        <main className={estilos.main}>
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer saludo="Bienvenidos" />}
                />
                <Route
                    path="/category/remeras"
                    element={<Item items="remera verde"/>}
                />
                 <Route
                    path="/category/gorras"
                    element={<Item items="gorra negra"/>}
                />
                 <Route
                    path="/category/camisas"
                    element={<Item items="camisa roja"/>}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;