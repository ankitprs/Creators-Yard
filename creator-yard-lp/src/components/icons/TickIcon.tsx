import React from 'react'

export function TickIcon({ color = "white", width = 14, height = 14 }: { color: string, width?: number, height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2280_2654)">
        <path d="M13.2759 4.00453L5.42793 12.2425C5.28393 12.3925 5.05093 12.3925 4.90793 12.2425L1.47393 8.63853C1.33893 8.48653 1.34293 8.24953 1.48293 8.10253C1.62293 7.95553 1.84893 7.95053 1.99393 8.09253L5.16793 11.4235L12.7559 3.45853C12.9009 3.31753 13.1269 3.32153 13.2669 3.46853C13.4069 3.61553 13.4109 3.85253 13.2759 4.00453Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_2280_2654">
          <rect width={width} height={height} fill={color} transform="translate(0 0.0976562)" />
        </clipPath>
      </defs>
    </svg>

  )
}

