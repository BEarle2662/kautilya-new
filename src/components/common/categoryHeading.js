const CategoryHeading = ({
  heading,
  color = "text-[#2c394c]",
  textAlign = "text-center",
}) => {
  return (
    <div className="mx-auto max-w-screen-2xl  md:py-6">
      <h1
        className={`${color} ${textAlign} leading-10 text-3xl md:text-5xl font-medium md:font-[400]  mt-2 mb-4 md:mt-4 md:mb-8`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default CategoryHeading;
