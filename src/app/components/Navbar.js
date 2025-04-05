import Image from "next/image"

function Navbar() {

    return (
        <>
            <nav className="grid grid-cols-3 border border-neutral-700 rounded-sm p-4 font-main items-center">
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:h-32 md:w-20 md:h-20">
                    <Image src="/camera.svg" alt="Camera" fill={true}/>
                </div>
                
                <h1 className="md:text-7xl sm:text-5xl p-2 text-center">Kenny Photo Portfolio</h1>
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:h-32 md:w-16 md:h-16 justify-self-end">
                    <Image src="/hamburger.svg" alt="Hamburger Menu" fill={true}/>
                </div>
                
            </nav>
        </>
    )


}

export default Navbar;