import "./App.css";
import { useState } from "react";
function App() {
  const [register, setRegister] = useState([]);

  // Fun

  const handle = (e) => {
    e.preventDefault();

    let contact = {
      name,
      num,
      email,
    };

    setRegister([...register, contact]);
    console.log(contact);
  };

  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const deletee = (i) => {
    setRegister(
      register?.filter((e) => {
        return e !== i;
      })
    );
  };

  return (
    <>
      <div className="bg-gray-50">
        <h1 className="text-center text-xl font-normal pt-4">
          Contact Register
        </h1>
        <div className="flex justify-between p-20">
          <div className="bg-gray-200 w-[34%] h-[60vh] rounded-md flex flex-col items-center justify-center">
            <h1 className="text-center pt-2 text-xl font-bold">
              Enter Your Info Below
            </h1>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="text"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="tel"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="PhoneNumber"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="email"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handle}
              className="bg-gray-700 text-white  py-2 px-3 rounded-md font-semibold mt-6 active:shadow-xl active:translate-y-0.5"
            >
              Register
            </button>
          </div>
          <div className="bg-gray-300  w-[50%] h-[50vh]">
            {register.length > 0 ? (
              register.map((i) => {
                return (
                  <>
                    <div className="flex space-x-6 py-8 justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Name</h1>
                        {i.name}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Phone Number</h1>
                        {i.num}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Email</h1>

                        {i.email}
                      </div>
                      <button
                        onClick={() => {
                          deletee(i);
                        }}
                        className="bg-red-400 py-1 text-white px-3 rounded-md"
                      >
                        delete
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="text-xl font-semibold">
                <h1 className="text-center my-36">No Contact are Saved Yet</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
