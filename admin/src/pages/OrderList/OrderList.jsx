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
} from "../../redux/apiCalls";

export default function OrderList() {
  const dispatch = useDispatch();
  const orderProduct = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

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
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 360,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link> */}
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
