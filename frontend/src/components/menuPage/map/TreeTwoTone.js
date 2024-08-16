const TreeTwoTone = ({ primaryColor, borderColor, borderWidth = 2.5 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20" viewBox="0 0 24 24" width="20" transform="translate(-12, -20)" style={{ overflow: "visible" }}>
            <g transform="translate(-12, -20)">
                <rect fill="none" height="20" width="20" />
            </g>
            <g transform="translate(-12, -20)">
                <polygon
                    fill={primaryColor}
                    stroke={borderColor}
                    strokeWidth={borderColor ? borderWidth : 0}
                    points="17,12 19,12 12,2 5.05,12 7,12 3.1,18 10.02,18 10.02,22 13.98,22 13.98,18 21,18"
                />
            </g>
        </svg>
    );
}

export default TreeTwoTone;