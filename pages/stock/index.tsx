import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useAppDispatch } from "@/store/store";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { useSelector } from "react-redux";
import { productImageURL } from "@/utils/commonUtil";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Typography } from "@mui/material";
import NumberFormat from "react-number-format";

type Props = {};

const Stock = ({}: Props) => {
  const dispatch = useAppDispatch();
  const productList = useSelector(productSelector);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      headerName: "IMG",
      field: "image",
      width: 80,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Zoom>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="product image"
            src={productImageURL(value)}
            style={{ width: 70, height: 70, borderRadius: "5%" }}
          />
        </Zoom>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 350,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Typography variant="body1">
          <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
  ];

  return (
    <Layout>
      <div>Stock</div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={productList ?? []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Layout>
  );
};

export default withAuth(Stock);
