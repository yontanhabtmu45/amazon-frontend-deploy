import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import Layout from "../../components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Porduct/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) => {
  //         console.log(snapshot);
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         );
  //       });
  //   } else {
  //     setOrders([]);
  //   }
  // }, []);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          <div>
            {orders?.length == 0 && (
              <div style={{ padding: "20px" }}>
                You don't have any orders yet
              </div>
            )}
          </div>
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>
                    order ID: {eachOrder?.id}
                    {eachOrder?.data?.basket?.map((order) => (
                      <ProductCard flex={true} Product={order} key={order.id} />
                    ))}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
