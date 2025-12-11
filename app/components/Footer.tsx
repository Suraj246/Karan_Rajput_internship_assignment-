export default function Footer() {
    return (
        <footer className="w-full bg-[#0F172A] text-white py-22 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                <div className="col-span-1">
                    <div className="w-24 h-12 bg-gray-300 text-black font-bold flex items-center justify-center rounded">
                        LOGO
                    </div>
                </div>

                <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
                    {Array.from({ length: 4 }).map((_, colIndex) => (
                        <div key={colIndex} className="space-y-2">
                            <h4 className="text-white font-semibold text-base">Lorem Ipsum</h4>
                            {Array.from({ length: colIndex === 3 ? 1 : 5 }).map((_, itemIndex) => (
                                <p key={itemIndex} className="text-white text-sm">
                                    Lorem Ipsum
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}