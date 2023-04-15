import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-screen-md mx-auto px-20">
      <Component {...pageProps} />
    </div>
  );
}
