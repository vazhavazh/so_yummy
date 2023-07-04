
import * as React from "react"


const CheckBoxIconComponent = ({ isChecked }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"

        >
            <path fill="#ECECEC" d="M0 0h20v20H0z" />
            <g clipPath="url(#a)">
                <path fill="#FAFAFA" d="M-311-586H64v2584h-375z" />
                <rect width={343} height={86} x={-295} y={-33} fill="#EBF3D4" rx={8} />
                <rect
                    width={38}
                    height={38}
                    x={1}
                    y={1}
                    stroke="#7E7E7E"
                    strokeOpacity={0.5}
                    rx={4}
                />

                <path
                    fill={isChecked ? "#8BAA36" : "transparent"}
                    d="M23.893 10.746a1.7 1.7 0 1 1 2.814 1.908l-9.22 13.6a1.7 1.7 0 0 1-2.814 0l-4.38-6.46a1.7 1.7 0 1 1 2.814-1.908l2.973 4.384 7.813-11.524Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M-311-586H64v2584h-375z" />
                </clipPath>
            </defs>
        </svg>
    )
}
export default CheckBoxIconComponent
