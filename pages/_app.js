import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GlobalStyle from "../styles/globalStyles";

// console.log(dancingScript);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
