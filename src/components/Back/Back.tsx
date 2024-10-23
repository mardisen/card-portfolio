function Back({ className }: { className: string }) {
    return (
        <div
            className={`flex flex-col justify-around items-center p-8 space-y-12 text-center text-white rounded-3xl ${className}`}
        >
            <div className="flex flex-col space-y-4 grow">
                <h1 className="text-2xl font-semibold">Experience:</h1>
                <div> Informatics Student @UniBa & UniHH </div>
                <div> Web Software Dev @Neosyn</div>
                <div> Software Developer @Dyrecta Lab</div>
                <div> Freelance Software Developer</div>
                <div> Fotovoltaic Installer/Maintaner @ServerGreen</div>
            </div>
            <div className="flex flex-col space-y-4 grow">
                <h1 className="text-2xl font-semibold">Skills:</h1>
                <div> Languages: JS/TS, Python, Dart, Java, C#</div>
                <div> FE Frameworks: React, Vue, Solid, TailwindCSS, Bootstrap, Flutter</div>
                <div> BE Frameworks: Next, Django, Express.js, GraphQL</div>
                <div> CI/CD: Docker, GitHub Actions, Vercel</div>
                <div> Misc: HTML, CSS, Storybook, Figma, Jest, TDD, SQL, noSQL</div>
                <div> Languages: Italian, English, German</div>
            </div>
        </div>
    );
}

export default Back;
