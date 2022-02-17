function Button({ children, ...props }) {
    return (
        <button {...props} className="rounded-full border-[3px] text-white border-white font-semibold px-7 py-3 inline-block hover:bg-white hover:text-black duration-150" >{children}</button>
    )
}

export default Button
