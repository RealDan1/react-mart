export default function TotalPrice({ totalPrice }) {
  return (
    //only display totalPrice if its greater than 0
    totalPrice !== 0 && (
      <div className="total-price">
        <h2>Total Price: R{totalPrice}</h2>
      </div>
    )
  );
}
