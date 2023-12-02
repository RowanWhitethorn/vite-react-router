import { Store } from "./Store";
import { useState } from "react";
import CotizacionCard from "./CotizacionCard";

export function Vacaciones() {
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <>
      <div className="migration-services">
        <h1 className="section-title">Vacaciones</h1>
        <Store />
        <div className="cotization-div">
          <button className="cotization-button" onClick={toggleOverlay}>
            Cotizar
          </button>
        </div>
        <CotizacionCard
          showOverlay={showOverlay}
          toggleOverlay={toggleOverlay}
        />
      </div>
    </>
  );
}
