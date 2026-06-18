const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="my-3 border-slate-300 opacity-40 sm:mx-auto lg:my-6" />
        <span className="block text-sm pb-4 text-slate-400 text-center">
          © {currentYear}{" "}
          <a
            href="/#Home"
            className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors duration-200"
          >
            RezkyFR™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;