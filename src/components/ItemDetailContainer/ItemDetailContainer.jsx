import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const db=getFirestore();
        const itemCollection = collection(db, 'items');
        const ref = doc(itemCollection, "EKkMuEa2QdNUjVHVmmFQ");
        getDoc(ref).then((res) => {
            setItem({ id: res.id, ...res.data() });
        });
    }, []);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;