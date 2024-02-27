import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
    "@keyframes slideup": {
        from: {
            opacity: 0,
            transform: "translateY(90px)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0)",
        },
    },
    "animation-slideup": {
        animation: "$slideup 0.4s ease",
    },
});
