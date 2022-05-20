// import { userData } from "../data/userData";

const API_URL = "https://dbackendnata.vercel.app";

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/getinfo`);
  const data = await res.json();

  return {
    props: {
      usersData: data.jane,
    },
  };
}

function DashBoardPage({ usersData }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-custom-blue3 text-3xl font-bold">Users Info</h1>

        <div className="mt-14 scale-90 md:scale-100">
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
  );
}

export default DashBoardPage;
