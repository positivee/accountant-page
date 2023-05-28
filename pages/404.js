import Link from "next/link";
import { NotFound404 } from "../styles/404Styles";

const NotFound = () => {
  return (
    <NotFound404>
      <h1>Strona nie istnieje: 404</h1>
      <p>
        Wróć do <Link href="/">Strony głównej</Link>
      </p>
    </NotFound404>
  );
};

export default NotFound;
