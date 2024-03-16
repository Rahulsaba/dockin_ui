import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <nav >
                <div>
                    {/* <Image
                        src="logo/Logo.png"
                        alt="logo"
                        height={150}
                        width={200}
                    /> */}
                </div>
                <div>
                    <a href="tell:+1 123-456-7891">
                        +123-456-7891
                    </a>
                </div>
            </nav>
        </>
    )
}