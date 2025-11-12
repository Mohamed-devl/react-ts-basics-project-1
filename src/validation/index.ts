//  ** productObj === errorsObj (Title, description, image, price)

export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.trim().length < 8 ||
    product.title.trim().length > 100
  ) {
    errors.title =
      "Title is required and must be between 8 and 100 characters.";
  } else if (
    !product.description.trim() ||
    product.description.trim().length < 20 ||
    product.description.trim().length > 1000
  ) {
    errors.description =
      "Description is required and must be between 20 and 1000 characters.";
  } else if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "A valid Image URL is required.";
  } else if (
    !product.price.trim() ||
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    errors.price = "Price is required and must be a positive number.";
  }

  return errors;
};
