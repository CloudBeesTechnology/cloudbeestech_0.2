import { MdPersonOutline } from "react-icons/md";

export const PFDetails = [
    {
        label:"FirstName",
        ph:"Enter a firstName",
        icons:<MdPersonOutline />,
        type:"text",
        name: "firstName",
    },
    {
        label:"LastName",
        ph:"Enter a lastName",
        icons:<MdPersonOutline />,
        type:"text",
        name: "lastName",
    },
    {
        label:"Email",
        ph:"Enter a email",
        icons:<MdPersonOutline />,
        type:"email",
        name: "email",
    },
    {
        label:"PhoneNumber",
        ph:"Enter a phoneNumber",
        icons:<MdPersonOutline />,
        type:"tel",
        name: "phone",
    },
]