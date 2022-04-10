const Search = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="24.5355"
        y="21"
        width="18"
        height="5"
        rx="2.5"
        transform="rotate(45 24.5355 21)"
        fill="#C4C4C4"
      />
      <circle cx="14.5" cy="14.5" r="12.5" stroke="black" strokeWidth="4" />
    </svg>
  )
}
export default Search
