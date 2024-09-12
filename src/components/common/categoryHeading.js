const CategoryHeading = ({ heading }) => {
  return (
    <div className="mx-auto max-w-screen-2xl py-6">
      <h1 className="text-[#2c394c] leading-10 text-3xl md:text-5xl font-[400] text-center mt-4 mb-8">
        {heading}
      </h1>
    </div>
  );
};

export default CategoryHeading;
