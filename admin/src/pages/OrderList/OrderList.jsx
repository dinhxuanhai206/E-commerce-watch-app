import "./OrderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  deleteProduct,
  getOrder,
  getProducts,
  updateOrder,
} from "../../redux/apiCalls";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

export default function OrderList() {
  const dispatch = useDispatch();
  const orderProduct = useSelector((state) => state.order.orders);
  

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

  const handleProcess = (id, product) => {
    console.log(product);
    const updateOrder = async () => {
      try {
        const res = await userRequest.put(`/orders/${id}`, {
          userId: product.userId,
          products: product.products.map((item) => ({
            productId: item._id,
            quantity: item.cartQuantity,
          })),
          amount: product.cartTotalAmount,
          name: product.name,
          phone: product.phone,
          address: product.address,
          status: "success",
        });
        console.log(res);
      } catch {}
    };
    updateOrder();
  };

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.name}</div>;
      },
    },

    {
      field: "products",
      headerName: "Products",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.products.map((item, index) => (
              <div key={index} className="productBlock">
                <div className="productId">{item.productId}</div>
                {/* <div>quantity: {item.quantity}</div> */}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Price",
      width: 110,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
    },
    {
      field: "status",
      headerName: "Process",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <button
              className={params.row.status === "success" ? "productListEdit" : "productListProcess"}
              onClick={() => handleProcess(params.row._id, params.row)}
            >
              {params.row.status}
            </button>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={orderProduct}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
