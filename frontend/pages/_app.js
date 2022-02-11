import { appWithTranslation } from 'next-i18next';
import 'tailwindcss/tailwind.css';
import Layout from "../components/layout";
import '../styles/globals.css';
import '../styles/overrideNextJSImageSettings.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
