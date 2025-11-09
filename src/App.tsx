import ProductCards from "./components/ProductCards";

import { formInputsList, productList } from "./data";

import Modal from "./components/ui/modal";
import { useState } from "react";
import type { ChangeEvent} from "react";
import  Button  from "./components/ui/Button";
import Input from "./components/ui/input";
import type { IProduct } from "./interfaces";




const App = () => {

/* Stat */
const [product, setProduct] = useState<IProduct>({
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category:{
    name: "",
    imageURL: "",
  }

});
const [isOpen, setIsOpen] = useState(false);
// render
const open=() =>setIsOpen(true);
  

  const close= () =>setIsOpen(false);
  
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target;

    setProduct({
            ...product,
      [name]: value,
    
    });

  }


  // Renders
  const renderProductList = productList.map((product) => (
    <ProductCards key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col mb-2">
      <label
        htmlFor={input.id}
        className="tracking-wider text-gray-700 cursor-pointer font-bold "
      >
        {input.label}
      </label>
      <Input type={input.type} name={input.name} id={input.id} placeholder={input.label} value={product[input.name]} onChange={onChangeHandler}/>
    </div>
  ));
  return (
    <main className="container mx-auto px-4">
      <Button
        className="text-center p-1.5 rounded-md w-full text-white font-bold bg-blue-500 hover:bg-indigo-800"
        onClick={open}
      >
        ADD
      </Button>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
        <form className="space-x-3">
          {renderFormInputList}
          <div className="flex space-x-3">
            <Button className="text-center p-1.5 rounded-md w-full text-white font-bold bg-blue-500 hover:bg-indigo-800">
              SUBMIT
            </Button>
            <Button className="text-center p-1.5 rounded-md w-full text-white font-bold bg-red-500 hover:bg-red-800">
              CANCEL
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App
