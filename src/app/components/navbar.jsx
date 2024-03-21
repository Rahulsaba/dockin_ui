import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <nav >
                <div className="flex">
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        height={33}
                        width={180}
                    />
                </div>
                <div className="header_right flex">
                    <a href="tell:+1 123-456-7891">
                        +123-456-7891
                    </a>
                </div>
            </nav>
        </>
    )
}