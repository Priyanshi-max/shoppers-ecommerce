import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.shopper.productData);
  const userInfo = useSelector((state) => state.shopper.userInfo);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      // Proceed to checkout logic
    } else {
      toast.error("Please sign in to checkout");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="w-full md:w-2/3">
            <CartItem />
          </div>
          <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-start gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  Rs.{totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore, itaque! Et dolorum veniam natus.
                </span>
              </p>
            </div>
            <p className="font-titlFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">Rs.{totalAmt}</span>
            </p>
            <button
              onClick={handleCheckOut}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
