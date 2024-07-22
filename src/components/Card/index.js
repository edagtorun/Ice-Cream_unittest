import React from "react";

const Card = ({ item, addToBasket, clearFromBasket, amount }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-3"
    >
      <img height={100} src={item.imagePath} alt="cesit-resim" />
      <span>{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => clearFromBasket(item.id)}
        >
          Sifirla
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
