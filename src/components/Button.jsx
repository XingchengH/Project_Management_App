export default function Button({ children, ...props }) {
    return <button className="bg-gray-900 text-white p-2 m-4 rounded hover:bg-gray-700 md:text-base" {...props}>
        {children}
    </button>
}