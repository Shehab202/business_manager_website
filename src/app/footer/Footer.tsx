import Section_one from "./Section_one";
import Section_two from "./Section_two";
import Section_three from "./Section_three";
const Footer = () => {
  return (
    <footer className=" bg-linear-to-r pt-5 from-[#F57C14] to-50% to-[#E93F1F]">
      <div className=" w-5/6 mx-auto">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
          <Section_one />
          <Section_two />
          <Section_three />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
