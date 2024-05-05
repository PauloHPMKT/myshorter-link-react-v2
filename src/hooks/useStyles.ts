import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
    "@keyframes slidedown": {
        from: {
            opacity: 0,
            transform: "translateY(-90px)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0)",
        },
    },
    "animation-slidedown": {
        animation: "$slidedown 2s ease",
    },
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
    '@keyframes rotation': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
    animationRotation: {
        animation: '$rotation 0.5s linear infinite',
    },
    '@keyframes fade': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    },
    animationFade: {
        animation: '$fade 0.5s ease',
    },
    selected: {
        borderRadius: "8px",
        padding: "8px 15px",
        backgroundColor: "#134EA8",
        color: "#fff",
        border: "2px solid #134EA8",
        "&::before": {
            content: "'|'",
            width: "4px",
            height: "100%",
            backgroundColor: "#fff",
            marginRight: "12px",
            marginBottom: "1px",
            borderRadius: "4px",
        }
    },
    hover: {
        transition: "0.5s ease-in-out",
        borderRadius: "8px",
        padding: "8px 15px",
        border: "2px solid transparent",
        "&:hover": {
            border: "2px solid transparent",
            backgroundColor: "#F3F4F6",
        }
    }
});
