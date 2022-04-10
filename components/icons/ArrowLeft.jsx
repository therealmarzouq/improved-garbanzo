const ArrowLeft = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 47 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="5" y="15" width="33" height="5" rx="2.5" fill="#DBDDE2" />
      <rect
        x="42"
        y="35"
        width="35"
        height="5"
        rx="2.5"
        transform="rotate(-90 42 35)"
        fill="#DBDDE2"
      />
      <path
        d="M17 32L3 18L17 4"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft
