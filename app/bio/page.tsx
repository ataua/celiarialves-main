
import { WindSong, Goudy_Bookletter_1911 } from "next/font/google";

const windS = WindSong( { subsets: [ "latin" ], weight: "400" } );
const goudy = Goudy_Bookletter_1911( { subsets: [ "latin" ], weight: "400" } );

const Bio = () => {

    return (
        <section id='sobre' className="min-h-96 w-full px-4 mt-8">
            <div className="max-w-[1080px] flex mx-auto my-16 gap-[5rem] items-end">
                <aside className='flex flex-col justify-center m-auto'>
                    <h1 className={ `pb-14 text-center w-full ${ windS.className } leading-none` }>Celia Ribeiro</h1>
                </aside>
            </div>
        </section>
    )
}

export default Bio