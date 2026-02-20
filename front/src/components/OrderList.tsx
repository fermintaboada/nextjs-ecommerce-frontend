"use client"

import { UseAuth } from "@/contexts/AuthContext";
import { Order } from "@/interfaces/IOrders";
import { getAllOrders } from "@/services/ordersServices";
import { useEffect, useState } from "react";

function OrderList () {
const { dataUser } = UseAuth();

const [orders, setOrders] = useState<Order[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
useEffect(() => {
    const fetchOrders = async () => {
    if (!dataUser?.token) {
        setOrders([]);
        return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
        const ordersResponse = await getAllOrders(dataUser?.token);
        setOrders(ordersResponse);
    } catch (error) {
        console.error("Error al traer la info:", error);
        setError("Ups no pudimos cargar la información");
        setOrders([]);
    } finally {
        setIsLoading(false);
    }
};  
fetchOrders();
}, [dataUser?.token]);

return <div>
    <h2 className="text-2xl font-bold mb-4">Mis ordenes</h2>

    {error && (
        <div>
            <p>{error}</p>
            <button 
                onClick={()=> window.location.reload()}
                className="mt-2 text-sm underline hover:no-underline"
            >
                Reintentar
            </button>
        </div>
    )};

    {isLoading ? (
        <div> 
            <div></div>
                <p>Cargando ordenes...</p>
            </div>
    ) : orders && orders.length > 0 ? (
        <div> 
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2"> ID</th>
                        <th className="px-4 py-2"> Productos</th>
                        <th className="px-4 py-2"> Estado</th>
                        <th className="px-4 py-2"> Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{order.id}</td>
                            <td className="border px-4 py-2">
                                {order.products?.length || 0} productos
                            </td>
                            <td className="border px-4 py-2 text-center">
                                <span className="px-2 py-1 bg-green-200 text-green-900 rounded-full text-xs">
                                    {order.status || "Procesada"}
                                </span>
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {new Date(order.date || Date.now()).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ):(
        <div className="text-center py-8 bg-blue-100 rounded-lg">
            <p className="text-gray-500">No tienes ordenes todavia</p>
        </div>
    )}
</div>;
}

export default OrderList;