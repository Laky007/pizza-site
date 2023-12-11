import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mx-3 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-5xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username !== "" ? <AlreadyCreatedUser /> : <CreateUser />}
    </div>
  );
}

export default Home;

function AlreadyCreatedUser() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  function handleclick() {
    navigate("/menu");
  }

  return (
    <>
      <p>Welcome {username}</p>
      <Button type="primary" onClick={handleclick}>
        Start ordering
      </Button>
    </>
  );
}
