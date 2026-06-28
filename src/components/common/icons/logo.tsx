export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width={props.width || "36"}
      height={props.height || "36"}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        LF
      </text>
    </svg>
  );
}

