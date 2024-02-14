import { FaMoneyBills } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSaloon } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";

export const dashboardData = [
    {
        id: 1,
        icon:<FaMoneyBills/>,
        title: "Total Income till date",
        value: "10,1024"
    },
    {
        id: 2,
        icon: <FaPeopleGroup/>,
        title: "Customers",
        value: "124",
    },
    {
        id: 3,
        icon: <GiSaloon/>,
        title: "Total Saloons",
        value: "3",
    },
    {
        id: 4,
        icon: <GrGroup/>,
        title: "Total Staff",
        value: "47",
    }
]