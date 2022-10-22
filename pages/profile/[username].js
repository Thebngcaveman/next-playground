import { useRouter } from "next/router.js";

const Profile = () => {
  const router = useRouter();
  const { username, a, b } = router.query;
  return (
    <div>
      <p>Hello {username}!</p>
      <p>
        and also {a} =---= {b}
      </p>
    </div>
  );
};

export default Profile;
