import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const Home = () => {

  const [role,setRole] = useState("Software developer")

  useEffect(()=>{
setInterval(()=>{
// setRole() instead use index and change it in by time and update value in p tage
},1000)
  },[role])

  return (
    <div className="w-screen h-full flex items-center justify-center">
      <h1 className="text-2xl text-gray-400 font-bold">
        Hi,iam <span className="text-gray-700">Irfan Ashraf</span>{" "}
      </h1>
       <p></p>
     </div>
  );
};

export default Home;
