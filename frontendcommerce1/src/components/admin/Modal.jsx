import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Modal({ id, revalidate }) {
    const [show, setShow] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://ecommerce-v1hm.onrender.com/deleteproduct/${id}`);
            revalidate(); // refresh the loader
            if (response.status === 200) {
                toast.success("Product deleted");
            }
        } catch (error) {
            toast.error("Failed to delete");
            console.log(error);
        }
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)} className="text-red-500 hover:text-red-700 ">
                <i className="material-icons-outlined text-base">delete</i>
            </button>

            {show && (
                <div className="flex gap-2 mt-4">
                <button onClick={handleDelete} className="bg-red-500 px-4 py-2 rounded-full">Yes</button>

                <button onClick={() => setShow(false)} className="bg-gray-500 px-4 py-2 rounded">No</button>
            </div>
            
            )}
        </>
    );
}


export default Modal
