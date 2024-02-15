export const INPUTS = [
  {
    areaName: "Bill From",
    fields: [
      {
        label: "Street Address",
        name: "street",
        placeholder: "Enter street address",
        type: "text",
      },
      { label: "City", name: "city", placeholder: "Enter city", type: "text" },
      {
        label: "Post Code",
        name: "postCode",
        placeholder: "Enter post code",
        type: "text",
      },
      {
        label: "Country",
        name: "country",
        placeholder: "Enter country",
        type: "text",
      },
    ],
  },
  {
    areaName: "Bill To",
    fields: [
      {
        label: "Client's Name",
        name: "clientName",
        placeholder: "Enter client's name",
        type: "text",
      },
      {
        label: "Clients's Email",
        name: "clientEmail",
        placeholder: "Enter Client Email",
        type: "email",
      },
      {
        label: "Street Address",
        name: "clientStreetAddress",
        placeholder: "Enter Client Street Address",
        type: "text",
      },
      {
        label: "City",
        name: "clientCity",
        placeholder: "Enter City ",
        type: "text",
      },
      {
        label: "Post Code",
        name: "clientPostCode",
        placeholder: "Enter Post Code ",
        type: "text",
      },
      {
        label: "Country",
        name: "clientCountry",
        placeholder: "Enter Country ",
        type: "text",
      },
    ],
  },
  {
    areaName: "Details",
    fields: [
      {
        label: "Invoice Date",
        name: "invoiceDate",
        placeholder: "Enter invoice date",
        type: "date",
      },
      {
        label: "Payment Terms",
        name: "paymentTerms",
        placeholder: "Enter payment terms",
        type: "number",
      },
      {
        label: "Project / Description",
        name: "description",
        placeholder: "Enter Description date",
        type: "text",
      },
    ],
  },
  {
    areaName: "Item List",
    fields: [
      {
        label: "Item Name",
        name: "name",
        placeholder: "Enter Item Name",
        type: "text",
      },
      {
        label: "Quantity",
        name: "quantityName",
        placeholder: "Enter Quantity ",
        type: "number",
      },
      {
        label: "Price",
        name: "price",
        placeholder: "Enter Price ",
        type: "number",
      },
      {
        label: "Total",
        name: "total",
        placeholder: "",
        type: "number",
      },
    ],
  },
];
