import Image from "next/image";

export default function Intro() {
    return (
        <banner className="into">
            <section>
                <h1>
                    Get the powerful
                </h1>
                <h1>
                    app to serve
                </h1>
                <p className="mt-2">
                    Gain access to thousands of home jobs in your area,
                </p>
                <p className="mt-1">
                    and build your own business around it.
                </p>

                <div className="launch mt-3">
                    <span>LAUNCHING</span><span>SOON</span>
                </div>
                <div >

                    <Image
                        className="slide_image"
                        src="/slide-phone.png"
                        alt="logo"
                        height={250}
                        width={500}
                    />
                </div>


            </section>
        </banner>
    )
}