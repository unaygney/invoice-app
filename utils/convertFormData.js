export function convertFormData(formData, submitAction) {
  let status = "";
  if (submitAction === "saveAsDraft") {
    status = "draft";
  } else if (submitAction === "saveAndSend") {
    status = "pending";
  }

  return {
    createdAt: formData.invoiceDate,
    senderAddress: {
      country: formData.country,
      city: formData.city,
      street: formData.street,
      postCode: formData.postCode,
    },
    total: parseFloat(formData.total),
    clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    description: formData.description,
    id: generateUniqueId(),
    paymentDue: formData.invoiceDate,
    clientAddress: {
      country: formData.clientCountry,
      city: formData.clientCity,
      street: formData.clientStreetAddress,
      postCode: formData.clientPostCode,
    },
    items: [
      {
        total: parseFloat(formData.total),
        quantity: parseFloat(formData.quantityName),
        price: parseFloat(formData.price),
        name: formData.name,
      },
    ],
    paymentTerms: formData.paymentTerms,
    status: status,
  };
}

function generateRandomCharacter() {
  const stringArr = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  let randomNumber = Math.floor(Math.random() * stringArr.length);
  return stringArr[randomNumber];
}

export function generateUniqueId() {
  const ID = [];
  for (let i = 0; i < 4; i++) {
    ID.push(generateRandomCharacter());
  }

  for (let j = 0; j < 2; j++) {
    ID.push(Math.floor(Math.random() * 10));
  }

  return ID.join("");
}
