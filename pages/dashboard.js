import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const API_URL = "https://dbackendnata.vercel.app";

function DashBoardPage() {
  const [user, setUser] = useState(false);
  const [usersData, setUsertsData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/getinfo`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token-dnata"),
        },
      });
      const data = await res.json();
      setUsertsData(data.jane);

      data.jane ? setUser(true) : setUser(false);
    };
    fetchData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token-dnata");
    router.push("/admin");
  };

  return (
    <div>
      {user ? (
        <div className="">
          <div className="bg-custom-blue4 flex justify-between items-center py-4 px-3 lg:px-[300px]">
            <div className="">
              <h1 className="text-xl lg:text-2xl font-bold text-custom-blue3">
                Dashboard
              </h1>
            </div>
            <div>
              <button
                className="bg-custom-blue3 scale-90 lg:scale-100 text-white py-2 px-4 font-bold rounded-lg"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-custom-blue3 text-2xl lg:text-3xl font-bold">
              Users Info
            </h1>

            <div className="mt-10 lg:mt-14 scale-90 origin-top md:scale-100">
              <table className="table-auto border-collapse border border-custom-blue3 text-center text-xs lg:text-base">
                <thead className="bg-custom-blue2 text-white">
                  <tr>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-blue3">
                      Name
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-blue3">
                      Email Address
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-blue3">
                      Phone No
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-blue3">
                      Country
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {usersData &&
                    usersData.map((data, i) => (
                      <tr key={i} className="even:bg-blue-100">
                        <td className="p-2 lg:p-5 border-collapse border border-custom-blue3">
                          {data.name}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-blue3">
                          {data.email}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-blue3">
                          {data.number}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-blue3">
                          {data.country}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashBoardPage;
