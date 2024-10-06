function Front() {
    const bday = new Date(2000, 11, 29, 0, 0);
    const age = Math.floor((Date.now() - bday.getTime()) / (1000 * 60 * 60 * 24 * 365.4));

    return (
        <div className="flex p-8 h-fit bg-gray-300 rounded-3xl xl:w-[1000px] w-[800px] justify-start space-x-12 xl:text-xl">
            <div className="flex-col space-y-2">
                <div className="w-32 h-32 bg-black rounded-full xl:w-48 xl:h-48">{/* TODO: add image */}</div>
                <div className="pt-4">Marino Didio</div>
                <div>
                    {age}, {bday.toLocaleDateString('it-IT')}
                </div>
                <div>
                    <a href="mailto://marino.didio.work@gmail.com">marino.didio.work@gmail.com</a>
                </div>
            </div>
            <div>
                <ul className="flex-col content-center space-y-3 h-full">
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Software Developer</div>
                    </li>
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Fotovoltaic Systems Installer/Mantainer</div>
                    </li>
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Lifelong Student</div>
                    </li>
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Bodybuilder</div>
                    </li>
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Sketch Artist</div>
                    </li>
                    <li className="flex content-center space-x-2">
                        <div className="content-center">•</div>
                        <div> Weeaboo</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Front;
