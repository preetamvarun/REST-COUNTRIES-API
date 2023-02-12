import './Shimmer.css';

const Shimmer = () => {
  const shimmers = Array.from({ length: 25 }).map(() => (
    <div className="my-2 mx-1 rounded-lg h-[300px] w-64 lg:w-60 overflow-hidden bg-slate-600">
      <div className="h-1/2 translate-y-[100%] rounded-b-lg">
        <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto titleGradient"></p>
        <div className="relative h-[100%] w-[95%] mx-auto mt-6">
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="flex justify-center flex-wrap items-center lg:max-w-[1300px] lg:m-auto xl:max-w-[1400px] xl:m-auto 2xl:max-w-[1536px] 2xl:m-auto">
        {shimmers}
      </div>
    </div>
  );
};

export default Shimmer;
