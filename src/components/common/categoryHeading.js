const CategoryHeading = ({ heading, color = "text-[#2c394c]" }) => {
  return (
    <div className="mx-auto max-w-screen-2xl  md:py-6">
      <h1
        className={`${color} leading-10 text-3xl md:text-5xl font-medium md:font-[400]  text-center mt-2 mb-4 md:mt-4 md:mb-8`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default CategoryHeading;
