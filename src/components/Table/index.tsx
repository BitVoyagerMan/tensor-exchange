export const Table = ({title, order_type}) => {
    const TABLE_HEAD = ["Price", "Volumn", "Total", ""];
    const TABLE_ROWS = [
        {
            id: 0,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        }, {
            id: 1,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        }, {
            id: 2,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        }, {
            id: 3,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        }, {
            id: 4,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        }, {
            id: 5,
            price: "58.50$/Tao",
            volumn: "τ 26.00",
            total: "$ 5,900.00",
        },
      ];
    return (
        <div className=" flex-auto flex flex-row">
            <div className="flex-auto p-[8px]">
                <h4 className="flex flex-auto text-[25px] font-medium text-[#212529] ">{title}</h4>
                <table className="test-[1rem] mb-[16px] w-full min-w-max table-auto text-left text-[#212529] border-[#dee2e6] font-normal border-spacing-2 ">
                    <thead>
                    <tr className="border-solid border-b-[#212529] border-b-[1px]">
                        {TABLE_HEAD.map((head) => (
                        <th key={head} className="p-[0.5rem]">
                            <span
                            >
                            {head}
                            </span>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="">
                    {TABLE_ROWS.map(({id, price, volumn, total }, index) => (
                        <tr key={id} className="odd:bg-[#f2f2f2]  border-solid border-b-[1px]">
                        <td className="p-[0.5rem]">
                            <span>
                            {price}
                            </span>
                        </td>
                        <td className="p-[0.5rem]">
                            <span>
                            {volumn}
                            </span>
                        </td>
                        <td className="p-[0.5rem]">
                            <span>
                            {total}
                            </span>
                        </td>
                        <td className="p-[0.5rem]">
                            <span className=" text-[#0d6efd] underline underline-offset-1">
                                [{order_type}]
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}