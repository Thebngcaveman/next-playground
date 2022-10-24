import { useRouter } from "next/router";

function Sluggering() {
  const router = useRouter();
  const listOfParams = router.query.slug || [];
  console.log(router.query.slug);

  return (
    <div>
      this is not index
      {listOfParams.map((value, key) => {
        return (
          <div key={key}>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sluggering;
