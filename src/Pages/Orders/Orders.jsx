import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut";
import "./Orders.css"
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [user]);

  return (
    <LayOut>
      <section className="container">
        <div className="orders_container">
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          {/* ordered items */}
          {orders?.map((eachOrder, i) => (
            <div key={i}>
              <hr />
              <p>Order ID: {eachOrder?.id}</p>
              {eachOrder?.data?.basket?.map((order) => (
                <ProductCard flex={true} product={order} key={order.id} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
