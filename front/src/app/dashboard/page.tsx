"use client";

import { UseAuth } from "@/contexts/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllOrders } from "@/services/ordersServices";
import { Order } from "@/interfaces/IOrders";

const DashboardPage = () => {
  const { dataUser, loading } = UseAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!loading && !dataUser) {
      router.push("/login");
    }
  }, [dataUser, loading, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (dataUser?.token) {
        try {
          const res = await getAllOrders(dataUser.token);
          setOrders(Array.isArray(res) ? (res as Order[]) : []);
        } catch (error) {
          console.error("Error al traer órdenes:", error);
          setOrders([]);
        }
      }
    };
    fetchOrders();
}, [dataUser]);


const money = useMemo(() => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}, []);

if (loading || !dataUser) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        <p>Verificando sesión...</p>
      </div>
    );
  }

  const user = dataUser.user;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">👤 Bienvenido, {user.name}.</h1>
      </header>

      <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
          Información Personal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex flex-col">
            <strong className="text-sm font-medium text-gray-500">Nombre</strong>
            <span className="text-lg text-gray-900">{user.name}</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-sm font-medium text-gray-500">Email</strong>
            <span className="text-lg text-gray-900 break-words">{user.email}</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-sm font-medium text-gray-500">Rol</strong>
            <span className="text-lg text-gray-900">{user.role}</span>
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <strong className="text-sm font-medium text-gray-500">Dirección</strong>
            <span className="text-lg text-gray-900">{user.address}</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-sm font-medium text-gray-500">Teléfono</strong>
            <span className="text-lg text-gray-900">{user.phone}</span>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between gap-4 mb-6 border-b pb-3">
          <h2 className="text-2xl font-semibold text-gray-800">Mis pedidos</h2>
          <span className="text-sm text-gray-600">
            Total: <strong className="text-gray-900">{orders.length}</strong>
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-8 bg-blue-50 rounded-lg">
            <p className="text-gray-600">No tenés pedidos todavía</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => {
              const total = order.products.reduce((acc, p) => acc + p.price, 0);

              return (
                <article
                  key={order.id}
                  className="rounded-xl border border-gray-100 p-5 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Orden #{index + 1}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        ID: {order.id} · Fecha:{" "}
                        {new Date(order.date || Date.now()).toLocaleDateString()}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      Envío: En camino
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Productos</p>

                    <ul className="divide-y divide-gray-100">
                      {order.products.map((p) => (
                        <li
                          key={p.id}
                          className="py-2 flex items-start justify-between gap-4"
                        >
                          <span className="text-sm text-gray-800">{p.name}</span>
                          <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                            {(p.price)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-sm font-extrabold text-gray-900">
                        {money.format(total)}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default DashboardPage;
