import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#FFFEFB] h-[100vh]">
      <Component {...pageProps} />
    </div>
  );
}
