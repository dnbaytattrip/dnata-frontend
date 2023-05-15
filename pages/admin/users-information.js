import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Table from "../../components/Admin/Table";
import { contactInfoColumn } from "../../components/Admin/Table/columns/contactInfoColumn";
import useGetData from "../../hooks/useGetData";
import { Loader } from "../../components/Loader";
import { useSession } from "next-auth/react";
import HeadSection from "../../components/HeadSection";
import { usersAccountColumn } from "../../components/Admin/Table/columns/usersAccountColumn";

const pageDetails = {
  title: "Users information page",
  description: "dnata",
  keywords: "dnata",
};

function UsersInformationPage() {
  const { fetchedData, isLoading, isError } = useGetData(`/get/userInfo`);

  // console.log("isLoading", isLoading);

  const usersInfo = fetchedData?.data;

  console.log("users info", usersInfo);

  // const { data: session } = useSession();

  // console.log("session from admin", session);

  return (
    <>
      <HeadSection pageDetails={pageDetails} />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="text-[28px] text-custom-blue2">
            <FaEnvelope />
          </span>
          <h1 className="text-2xl font-bold text-custom-blue3">
            Users Information
          </h1>
        </div>

        {isLoading && <Loader />}

        {isError && (
          <p className="mt-28 text-center font-bold text-red-700  text-xl">
            Something went wrong
          </p>
        )}

        {/* {!isLoading &&
          !usersInfo?.length(
            <p className="mt-28 text-center font-bold text-red-700  text-xl">
              Something went wrong
            </p>
          )} */}

        <div className="mt-2">
          <div className="">
            {usersInfo && (
              <Table
                columnsHeading={usersAccountColumn}
                usersData={usersInfo}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersInformationPage;
