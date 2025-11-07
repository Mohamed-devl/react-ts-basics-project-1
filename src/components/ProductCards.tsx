import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";

import Button from "./ui/Button";

interface Iprops {
  product: IProduct;
}


const ProductCards = ({product}: Iprops)=>{
    return (
      <div className="max-w-sm md:max-w-lg mx-auto border border-red-200 p-2 rounded-2xl flex flex-col">
        <img
          src={product.imageURL}
          alt={product.title}
          className={"w-full h-56 rounded-md "}
        />
        <h3 className="mt-1 mb-3 font-bold  text-gray-900">{product.title}</h3>
        <p className=" text-gray-400">{txtSlicer(product.description)}</p>
        <div className="flex items-center my-4 space-x-1">
          <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-700 font-bold">{product.price}</span>
          <img
            src={product.category.imageURL}
            alt={product.title}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex items-center justify-between mt-2 space-x-2 mb-1">
          <Button
            className="bg-blue-500"
          >
            EDIT
          </Button>
          <Button className="bg-red-500"
          >
            DElETE
          </Button>
        </div>
      </div>
    );
}

export default ProductCards