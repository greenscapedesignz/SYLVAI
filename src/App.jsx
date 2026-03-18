import React, { useState, useEffect } from "react";
import { sync } from "./api";

export default function App() {

  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState({ name: "", phone: "", email: "" });
  const [step, setStep] = useState("profile");
  const [lux, setLux] = useState(300);
  const [cart, setCart] = useState([]);

  // ---------------------------
  // INIT USER
  // ---------------------------
  useEffect(() => {
    let id = localStorage.getItem("user_id");
    if (!id) {
      id = "U" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("user_id", id);
    }
    setUserId(id);
  }, []);

  // ---------------------------
  // SAVE PROFILE
  // ---------------------------
  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));

    sync("User_Init", { userProfile: profile }, userId);

    setStep("scan");
  };

  // ---------------------------
  // SCAN SIMULATION
  // ---------------------------
  const runScan = () => {
    sync("Track_Event", {
      event_type: "SCAN_COMPLETED",
      payload: { lux }
    }, userId);

    setStep("shop");
  };

  // ---------------------------
  // ADD TO CART
  // ---------------------------
  const addToCart = (plant) => {
    setCart([...cart, plant]);

    sync("Track_Event", {
      event_type: "ADD_TO_CART",
      payload: { plant }
    }, userId);
  };

  // ---------------------------
  // CHECKOUT
  // ---------------------------
  const checkout = () => {
    sync("Procurement_Order", {
      userProfile: profile,
      items: cart,
      totalValue: cart.length * 500
    }, userId);

    alert("Order placed 🚀");
    setCart([]);
    setStep("profile");
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div style={{ padding: 20, color: "white", fontFamily: "Helvetica" }}>

      {step === "profile" && (
        <>
          <h2>Enter Details</h2>
          <input placeholder="Name" onChange={e => setProfile({...profile, name:e.target.value})}/>
          <input placeholder="Phone" onChange={e => setProfile({...profile, phone:e.target.value})}/>
          <input placeholder="Email" onChange={e => setProfile({...profile, email:e.target.value})}/>
          <button onClick={saveProfile}>Continue</button>
        </>
      )}

      {step === "scan" && (
        <>
          <h2>Scan Environment</h2>
          <input type="range" min="100" max="1000" value={lux} onChange={e=>setLux(e.target.value)} />
          <button onClick={runScan}>Run Scan</button>
        </>
      )}

      {step === "shop" && (
        <>
          <h2>Recommended Plants</h2>

          {["Snake Plant", "Pothos", "Peace Lily"].map(p => (
            <div key={p}>
              {p} <button onClick={() => addToCart(p)}>Add</button>
            </div>
          ))}

          <hr />

          <h3>Cart: {cart.length}</h3>
          <button onClick={checkout}>Checkout</button>
        </>
      )}

    </div>
  );
}
