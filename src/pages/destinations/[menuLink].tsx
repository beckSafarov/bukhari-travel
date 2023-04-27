import React from "react";
import { useRouter } from "next/router";

const array = [
  {
    id: 1,
    name: "kaz",
    country: "kazakhstan",
    currency: "tenge",
  },
  {
    id: 2,
    name: "tashkent",
    country: "uzbekistan",
    currency: "soum",
  },
];
const destination = () => {
  /* eslint-disable-next-line
      react-hooks/rules-of-hooks */
  const router = useRouter();
  const { menuLink: destName } = router.query;
  const el = array.find((element) => element.name === destName);
  console.log(destName);
  return (
    <div>
      {el?.name}
      {el?.country}
      {el?.currency}
      hhaha
    </div>
  );
};

export default destination;
