import Button from "../../ui/Button";
import { deleteItem, getCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DeleteItem({ pizzaId }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
    if (cart.length === 1) {
      navigate("/menu");
    }
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
