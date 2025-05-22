import Image from 'next/image'
import Link from 'next/link'

function About() {
    return (
        <>

            <article className="flex flex-col items-center justify-center mt-[20px] gap-7">
                <div className="relative w-[30rem] h-[40rem]">
                    <Image src="/AboutMeKenny.jpg" alt="Kenny 8 ball" fill={true} className="mt-5"/>
                </div>
                <section className="flex flex-col items-center justify-center">
                    <h2 className="font-main md:text-4xl text-2xl">About Me!</h2>
                    <p className="w-[20rem] md:w-[30rem] lg:w-[50rem] font-main md:text-4xl">Hello! My name is Kenny and I&apos;m currently a photographer for fun whose currently trying to become a Web Developer! 
                        I go the San Jose State University going for my bachelors in Computer Science. 
                        However, I&apos;m not opposed to the idea of going to photography as a career, not likely, but possible.
                    </p>
                </section>

                <section className="flex flex-col items-center justify-center">
                    <div className="relative w-[30rem] h-[20rem] mb-2">
                        <Image src="/Shiba.jpg" alt="Sony A6700" fill={true}/>
                    </div>
                    <Link href="https://tinyurl.com/yckbwr69" className="font-main md:text-4xl text-2xl hover:text-amber-600">Sony A6700 w/Sigma 18-50mm F.28</Link>
                    <p className="font-main w-[20rem] md:w-[30rem] lg:w-[50rem]">I picked up this camera not too long ago from Amazon and I&apos;ve been really enjoying it so far. It&apos;s on the more pricey side, but I think all of the features that it comes with is very nice and
                        it&apos;s also pretty good for video, which I do plan to do in the future.
                    </p>
                </section>
            </article>
        
        </>
    )
}

export default About;