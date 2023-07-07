const GenderPerClass = ({
  totalStudents = 1000,
  males = 400,
  females = 600,
  classs,
}) => {
  const malePercentage = ((males / totalStudents) * 100).toFixed();
  const femalePercentage = ((females / totalStudents) * 100).toFixed();

  const fwidthVal = `${femalePercentage}%`;
  const mwidthVal = `${malePercentage}%`;

  return (
    <div className="px-2">
      <h2 className="text-xl my-0 font-medium text-gray-600">{classs}</h2>
      <div className="w-full h-6 rounded-full overflow-hidden bg-[#65DFF0]">
        <div
          className={`h-full bg-[#1F48A1]`}
          style={{ width: fwidthVal }}></div>
        <div
          className={`h-full `}
          style={{ width: mwidthVal }}></div>
      </div>
    </div>
  );
};

export default GenderPerClass;
