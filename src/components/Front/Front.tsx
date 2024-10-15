function Front() {
    const bday = new Date(2000, 11, 29, 0, 0);
    const age = Math.floor((Date.now() - bday.getTime()) / (1000 * 60 * 60 * 24 * 365.4));

    return (
        <div className="p-8 bg-gray-300 rounded-3xl h-[700px] w-[650px] xl:text-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-32 h-32 bg-black rounded-full xl:w-48 xl:h-48">{/* TODO: add image */}</div>
                <div>Marino Didio</div>
                <div>
                    {age}, {bday.toLocaleDateString('it-IT')}
                </div>
                <div>
                    <a href="mailto://marino.didio.work@gmail.com">marino.didio.work@gmail.com</a>
                </div>

{/* Put Proper Separator */}
                <div>////////////////////////////////////////////////</div>
                <div> Software Developer</div>

                <div> Fotovoltaic Systems Installer/Mantainer</div>

                <div> Lifelong Student</div>

                <div> Bodybuilder</div>

                <div> Sketch Artist</div>

                <div> Weeaboo</div>
            </div>
        </div>
    );
}

export default Front;
