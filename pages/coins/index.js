import axios from "axios";
import Image from "next/image.js";

const CoinList = ({ dataCoin }) => {
  console.log(dataCoin);
  return (
    <div>
      {dataCoin.coins.map((value, key) => {
        console.log(value.icon);
        return (
          <div key={key}>
            <h1>{value.name}</h1>
            <img src={value.icon} />
            <p>{value.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  //getStaticProps only fetch on build time
  //   const id = params.id;
  const data = await axios
    .get("https://api.coinstats.app/public/v1/coins?skip=0")
    .then((value) => {
      return value;
    });

  return {
    props: {
      dataCoin: data.data,
    },
    revalidate: 10,
  };
};
export default CoinList;
