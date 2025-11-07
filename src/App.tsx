import ProductCards from "./components/ProductCards";

import { productList } from "./data";

import Modal from "./components/ui/modal";
import { useState } from "react";
import  Button  from "./components/ui/Button";
const App = () => {

/* Stat */

const [isOpen, setIsOpen] = useState(false);

function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  // Renders
  const renderProductList = productList.map((product) => (
    <ProductCards key={product.id} product={product} />
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
        <div className="flex space-x-2">
          <Button className="text-center p-1.5 rounded-md w-full text-white font-bold bg-blue-500 hover:bg-indigo-800">
            SUBMIT
          </Button>
          <Button className="text-center p-1.5 rounded-md w-full text-white font-bold bg-red-500 hover:bg-red-800">
            CANCEL
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App
