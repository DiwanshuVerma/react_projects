export default function Card() {
    return (
            <div className='dark:bg-gray-800 dark:border-gray-700 border-2 p-6 flex flex-col gap-4 rounded text-2xl dark:text-white font-medium shadow-md'>
                <div id="img">
                    <img
                        className='rounded m-auto'
                        src="src\assets\bike_image.webp"
                        alt="bike image" />
                </div>

                <div id="paragraph">
                    <p>Suzuki Hayabusa, INDIA</p>
                </div>

                <div id="ratings">
                    <img
                        className='w-36 mb-4'
                        src="src\assets\ratings.png" alt="" />
                    {/* 4.5 */}
                </div>

                <div id="price" className='flex justify-between items-center'>
                    <p className='font-bold'>₹ 16.90 - 17.70 Lakh*</p>
                    <a href='https://www.bikedekho.com/suzuki/hayabusa' className='cursor-pointer font-light text-white bg-blue-800 p-2 rounded text-base'>View Offers</a>
                </div>
            </div>
    )
}