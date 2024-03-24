import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <nav >
                <div className="flex_nav">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        height={30}
                        width={150}
                    />
                </div>
                <div className="header_right flex_nav">
                    <a href="tell:+1 123-456-7891">
                        +123-456-7891
                    </a>
                </div>
            </nav>
        </>
    )
}