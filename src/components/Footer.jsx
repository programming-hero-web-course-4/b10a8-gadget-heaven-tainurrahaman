const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-2 md:p-10 text-center">
      <div className="w-[300px] md:w-[500px] mx-auto mb-4 md:mb-12 ">
        <h2 className="font-bold text-[20px] md:text-[32px] text-white mb-3">
          Gadget Heaven
        </h2>
        <p className="font-medium text-[16px]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className=" flex justify-evenly text-white text-[12px] md:text-[16px]">
        <nav className="flex flex-col ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
