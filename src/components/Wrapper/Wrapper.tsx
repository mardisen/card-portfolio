import { useState, useCallback, MouseEventHandler, useRef, useEffect } from 'react';
import Back from '../Back/Back';
import Front from '../Front/Front';
import { animate, motion } from 'framer-motion';

type Coordinates = {
    x: number;
    y: number;
};

const transition: any = { type: 'spring', stiffness: 100, bounce: 0.7, delay: 0 };

function Wrapper() {
    const ref = useRef<any>();

    const [rotation, setRotation] = useState<Coordinates>({ x: 0, y: 0 });
    const [flipped, setFlipped] = useState<boolean>(false);
    const [hovering, setHovering] = useState<boolean>(false);

    const onHover = useCallback<MouseEventHandler<HTMLDivElement>>(
        (event) => {
            if (hovering) {
                const target = ref.current as HTMLDivElement;

                const x = (event.pageX - target.offsetLeft) / target.clientWidth - 0.5;
                const y = (event.pageY - target.offsetTop) / target.clientHeight - 0.5;

                const coeff = 40;
                setRotation({ x: -x * coeff, y: y * coeff });
            }
        },
        [hovering, setRotation]
    );

    const onFlip = useCallback(() => {
        setFlipped(!flipped);
    }, [flipped, setFlipped]);

    useEffect(() => {
        animate(ref.current, { rotateY: flipped ? 180 : 0 }, transition);
    }, [flipped, hovering]);

    return (
        <>
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
                <motion.div
                    className="col-start-1 row-start-1 card"
                    style={{ transformPerspective: 4000, originX: 0.5, originY: 0.5 }}
                    whileHover={{
                        rotateX: rotation.y,
                        rotateY: rotation.x + (flipped ? 180 : 0),
                        originX: 0.5,
                        originY: 0.5
                    }}
                    transition={transition}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => {
                        setHovering(false);
                        setRotation({ x: 0, y: 0 });
                    }}
                    onMouseMove={onHover}
                    ref={ref}
                >
                    <div className="grid grid-cols-1 grid-rows-1 place-items-center face front">
                        <Front className="col-start-1 row-start-1" />
                        <div className="col-start-1 row-start-1 w-full h-full foil" style={{ opacity: 1 }} />
                    </div>
                    <div className="grid grid-cols-1 grid-rows-1 place-items-center face back">
                        <Back className="col-start-1 row-start-1" />
                        <div className="col-start-1 row-start-1 w-full h-full foil" style={{ opacity: 1 }} />
                    </div>
                </motion.div>
            </div>

            <button
                className="px-12 py-4 font-bold text-white uppercase bg-gray-900 rounded-lg transition-colors duration-300 hover:bg-rose-600"
                onClick={onFlip}
            >
                {/* <button
                className="px-12 py-4 font-bold text-white uppercase bg-gradient-to-b from-gray-900 via-rose-700 to-indigo-700 rounded-lg transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 via-50%"
                onClick={onFlip}
            > */}
                {/* <button className="px-12 py-4 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl" onClick={onFlip}> */}
                Flip
            </button>
        </>
    );
}

export default Wrapper;
