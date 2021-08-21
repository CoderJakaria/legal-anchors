import React from "react";

import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

const ComparePackage = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
      <div className="md:col-span-2 col-span-3">
        <div className="rounded-sm pt-12">
          <h1 className="text-xl font-semibold mb-5 text-gray-600">
            Compare Package
          </h1>

          <div className="overflow-x-auto border border-gray-300 rounded-md border-r-0">
            <table className="w-full text-sm height leading-8">
              <colgroup>
                <col className="border-r border-gray-300" />
                <col className="border-r border-gray-300" />
                <col className="border-r border-gray-300" />
                <col className="border-r border-gray-300" />
              </colgroup>

              <tbody>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top">
                    Package
                  </th>
                  <td className="align-text-top text-left p-4">
                    <p className="pb-2 text-base font-medium">$5</p>
                    <p className="pb-4 text-lg font-semibold text-gray-600">
                      Basic
                    </p>
                    <p className="uppercase text-3 text-xs font-medium font-semibold text-gray-500">
                      BASIC
                    </p>
                  </td>
                  <td className="align-text-top text-left p-4">
                    <p className="pb-2 text-base font-medium">$30</p>
                    <p className="pb-4 text-lg font-semibold text-gray-600">
                      Standard
                    </p>
                    <p className="uppercase text-3 text-xs font-medium font-semibold text-gray-500">
                      GOLD
                    </p>
                  </td>
                  <td className="align-text-top text-left p-4">
                    <p className="pb-2 text-base font-medium">$50</p>
                    <p className="pb-4 text-lg font-semibold text-gray-600">
                      Premium
                    </p>
                    <p className="uppercase text-3 text-xs font-medium font-semibold text-gray-500">
                      PLATINUM
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top"></th>
                  <td className="align-text-top text-left p-4 text-xs font-normal text-gray-500">
                    A simple 1 page front end web development in react js
                  </td>
                  <td className="align-text-top text-left p-4 text-xs font-normal text-gray-500">
                    5 page front end web development in react js with redux and
                    next js
                  </td>
                  <td className="align-text-top text-left p-4 text-xs font-normal text-gray-500">
                    Multiple page front end web development in react js with
                    redux and next js (pro feature
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Design Customization
                  </th>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Content Upload
                  </th>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Responsive Design
                  </th>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <DoneOutlinedIcon className="text-green-400" />
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Number of Pages
                  </th>
                  <td className="w-1/4 align-middle text-center ">1</td>
                  <td className="w-1/4 align-middle text-center ">5</td>
                  <td className="w-1/4 align-middle text-center ">10</td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Revisions
                  </th>
                  <td className="w-1/4 align-middle text-center ">Unlimited</td>
                  <td className="w-1/4 align-middle text-center ">Unlimited</td>
                  <td className="w-1/4 align-middle text-center ">Unlimited</td>
                </tr>
                <tr>
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Delivery Time
                  </th>
                  <td className="w-1/4 align-middle text-center ">1 day</td>
                  <td className="w-1/4 align-middle text-center ">5 days</td>
                  <td className="w-1/4 align-middle text-center ">8 days</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <th className="text-gray-500 font-normal text-left py-3 px-4 align-text-top leading-snug">
                    Total
                  </th>
                  <td className="w-1/4 align-middle text-center ">
                    <p>$5</p>
                    <button className="my-4 py-2 px-7 rounded-md text-white bg-green-500 font-bold text-sm">
                      Select
                    </button>
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <p>$30</p>
                    <button className="my-4 py-2 px-7 rounded-md text-white bg-green-500 font-bold text-sm">
                      Select
                    </button>
                  </td>
                  <td className="w-1/4 align-middle text-center ">
                    <p>$50</p>
                    <button className="my-4 py-2 px-7 rounded-md text-white bg-green-500 font-bold text-sm">
                      Select
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePackage;
