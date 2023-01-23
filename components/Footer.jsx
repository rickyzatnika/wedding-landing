import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4 bg-indigo-500 flex items-center justify-evenly text-center">
        <p className="text-sm text-white/80">
          <Link href="/" passHref>
            © 2022 dbooks.co.id
          </Link>
        </p>
        <p className="text-sm text-white/80">
          Powered by : <Link href="https://ryza.inkara.id">ryza.inkara.id</Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
