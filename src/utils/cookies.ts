import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const removeCookies = () => {
    console.log('token---------->',Cookies)
  const router = useRouter();
  Cookies.remove("token");
  Cookies.remove("type");
  router.push("/");
};
