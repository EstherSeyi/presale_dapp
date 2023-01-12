import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 right-0 left-0 py-4">
      <div className="w-11/12 sm:w-10/12 mx-auto flex justify-center text-grey_02">
        <span className="md:hidden mr-2">© 2022 Exx Network</span>
        <span className="md:hidden">
          <Link href="#" className="mr-2">
            FAQ’s{" "}
          </Link>
          |{" "}
          <Link href="#" className="mx-2">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" className="mx-2">
            Support
          </Link>
        </span>

        <span className="hidden md:inline mx-4">FAQ</span>
        <span className="hidden md:inline mx-4">Exx Website</span>
        <span className="hidden md:inline mx-4">Terms & Conditions</span>
        <span className="hidden md:inline mx-4">Help</span>
      </div>
    </footer>
  );
};

export default Footer;
