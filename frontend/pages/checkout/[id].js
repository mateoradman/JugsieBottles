import {useRouter} from "next/router";

const Checkout = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>

      {id}
    </div>
  );
};

export default Checkout;
