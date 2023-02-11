import './Shimmer.css';

const Shimmer = () => {
  return (
    <div>
      <div className="flex justify-between max-w-[1024px] mx-auto mt-20">
        <div className="h-[300px] w-60 bg-slate-700 m-2 rounded-lg">
          <div className="h-1/2 translate-y-[100%] rounded-b-lg">
            <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto" id="gradient1"></p>
            <div className="relative h-[100%] w-[95%] m-auto">
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-60 bg-slate-700 m-2 rounded-lg">
          <div className="h-1/2 translate-y-[100%] rounded-b-lg">
            <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto" id="gradient1"></p>
            <div className="relative h-[100%] w-[95%] m-auto">
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-60 bg-slate-700 m-2 rounded-lg">
          <div className="h-1/2 translate-y-[100%] rounded-b-lg">
            <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto" id="gradient1"></p>
            <div className="relative h-[100%] w-[95%] m-auto">
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-60 bg-slate-700 m-2 rounded-lg">
          <div className="h-1/2 translate-y-[100%] rounded-b-lg">
            <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto" id="gradient1"></p>
            <div className="relative h-[100%] w-[95%] m-auto">
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
              <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
