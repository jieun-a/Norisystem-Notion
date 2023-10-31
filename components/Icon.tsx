interface IconProps {
    size: number;
    color?: string;
}

const Icon = ({ size, color }: IconProps) => (
    <svg
        height={size}
        viewBox="0 0 200 200"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M171.91,94.99l-68.38-68.38c-1.95-1.95-5.12-1.95-7.07,0L28.09,94.99c-1.95,1.95-1.95,5.12,0,7.07
	c1.95,1.95,5.12,1.95,7.07,0l3.15-3.15v70.94c0,2.76,2.24,5,5,5h35.36h42.67h35.36c2.76,0,5-2.24,5-5V98.91l3.15,3.15
	c0.98,0.98,2.26,1.46,3.54,1.46s2.56-0.49,3.54-1.46C173.86,100.1,173.86,96.94,171.91,94.99z M83.67,164.85v-43.67h32.67v43.67
	H83.67z M151.69,164.85h-25.36v-48.67c0-2.76-2.24-5-5-5H78.67c-2.76,0-5,2.24-5,5v48.67H48.31V88.91L100,37.22l51.69,51.69V164.85z
	"/>
    </svg>
);

export default Icon;