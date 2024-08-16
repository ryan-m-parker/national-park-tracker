const FlagTwoTone = ({ primaryColor, borderColor, borderWidth = 2.5 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" transform="translate(-10, -20)" style={{ overflow: "visible" }}>
            <g transform="translate(-10, -20)">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill={primaryColor} stroke={borderColor} strokeWidth={borderColor ? borderWidth : 0} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
            </g>
        </svg>
    );
}

export default FlagTwoTone;