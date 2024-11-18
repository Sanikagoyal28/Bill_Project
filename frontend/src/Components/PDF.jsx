import React from "react";
import vegetableList from "../Utils/vegetable.js";

function splitIntoPages(items, itemsPerPage) {
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  return pages;
}

export default function Pdf(props) {
  const { vegetables, total, name, address, bill_number, date } = props;
  const itemsPerPage = 32;

  // Split the vegetables array into pages
  const pages = splitIntoPages(vegetables, itemsPerPage);

  return (
    <div className="w-full p-4 h-full">
      <div className="mx-auto m-4 border border-black">
        {/* Loop through each page */}
        {pages.map((pageItems, pageIndex) => (
          <div
            key={pageIndex}
            style={{
              pageBreakAfter:
                pageIndex === pages.length - 1 ? "auto" : "always",
            }}
          >
            {/* Show header only on the first page */}

            {pageIndex === 0 && (
              <div className="text-center">
                <h1 className="text-2xl font-bold border-b border-black pb-3">
                  NARAYAN GREEN VEGETABLES
                </h1>
                <h2 className="text-xl font-semibold pb-3 border-b border-black uppercase">
                  INDIAN, Exotic, Imported & Fruits Supplies
                </h2>
                <p className="pb-2 border-black border-b">
                  <b>Warehouse Add:</b> Senapati Bapat Marg, Dadar (West),
                  Mum-400028
                </p>
                <p className="border-b border-black pb-2">
                  <b>Mob:</b> 9167267531 / 9987253372 &nbsp; <b>E-Mail:</b>{" "}
                  narayanchoudhary83@gmail.com
                </p>

                {/* Invoice Information */}
                <div className="flex justify-between w-full">
                  <div className="w-4/5">
                    <p className="pt-2 pb-3 border-b border-black  px-6 capitalize">
                      BILL TO: <strong>{name}</strong>
                    </p>
                    <p className="pt-2 pb-3 px-6 capitalize">
                      Address: <strong>{address}</strong>
                    </p>
                  </div>
                  <div className="w-1/5 border-l border-black">
                    <p className="border-b px-2 pb-3 pt-2 border-black">
                      Invoice No: <strong>{bill_number}</strong>
                    </p>
                    <p className="px-2 pb-3 pt-2">
                      Invoice Date:{" "}
                      <strong>
                        {date && new Date(date).toLocaleDateString("en-GB")}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Render Table */}
            <table className="w-full border-collapse border-b border-black">
              {pageIndex === 0 && (
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border-t border-b border-black px-2 pt-2 pb-3 text-lg text-center">
                      Sr. No
                    </th>
                    <th className="border border-r-0 border-black px-2 pt-2 pb-3 text-center text-lg">
                      Particulars
                    </th>
                    <th className="border border-r-0 border-black px-2 text-center text-lg">
                      Total (Kg)
                    </th>
                    <th className="border border-black px-2 text-center text-lg">
                      Per (Kg)
                    </th>
                    <th className="border-t border-b border-black px-2 text-center text-lg">
                      Amount (In Rs.)
                    </th>
                  </tr>
                </thead>
              )}
              <tbody>
                {pageItems.map((item, index) => (
                  <tr key={index + 1} className="pb-2 w-full">
                    <td className="border border-black px-2 py-2 text-center w-[15%]">
                      {index + 1 + pageIndex * itemsPerPage}
                    </td>
                    <td className="border border-black px-2 py-2 text-center w-2/5">
                      {item.name} / {vegetableList[item?.name?.toLowerCase()]}
                    </td>
                    <td className="border border-black px-2 py-2 text-center w-[15%]">
                      {item.quantity}
                    </td>
                    <td className="border border-black px-2 py-2 text-center w-[15%]">
                      {item.price_per_kg}
                    </td>
                    <td className="border border-black px-2 py-2 text-center w-[15%]">
                      {item.quantity * item.price_per_kg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Amount (Only on last page) */}
            {pageIndex === pages.length - 1 && (
              <div className="flex justify-between w-full py-3 px-6 font-bold">
                <p>Total Amount:</p>
                <p>Rs. {total}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
