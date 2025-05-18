import Image from 'next/image'

function About() {
    return (
        <>
            <div className="flex items-center justify-center mt-[20px]">
                <section className="flex flex-col items-center justify-center gap-2">
                    <h1 className="font-main md:text-4xl">About Me!</h1>
                    <p className="w-[20rem] md:w-[30rem] lg:w-[50rem] font-main md:text-4xl">Hello! My name is Kenny and I&apos;m currently a photographer for fun whose currently trying to become a Web Developer! 
                        I go the San Jose State University going for my bachelors in Computer Science. 
                        However, I&apos;m not opposed to the idea of going to photography as a career, not likely, but possible.
                    </p>
                </section>
                <Image src="/Kenny8Ball.jpg" alt="Kenny 8 ball" width={300} height={300} className="mt-5"/>

            </div>
        
        </>
    )
}

export default About;