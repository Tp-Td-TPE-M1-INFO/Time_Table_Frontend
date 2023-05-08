// # +====================================================================================+ #
// # |================================= Powerk-soft ======================================| #
// # |====================== bus-tickets app - All rights reserved =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// React import
import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal, styleT }) => {
  return (
    <div className="new-admin"
        ref={buttonRef}
        onClick={showModal}
        >
        <div style={styleT}>
            <i class="ri-add-line"></i>
            <button
            className="btn btn-lg btn-danger center modal-button"
            style={styleT}
            >
            {triggerText}
            </button>

        </div>
    </div>
  );
};
export default Trigger;
