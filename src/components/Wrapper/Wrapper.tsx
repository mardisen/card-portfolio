import { useState, useCallback, MouseEventHandler, useRef } from 'react';
import Back from '../Back/Back';
import Front from '../Front/Front';
import { motion } from 'framer-motion';

type Rotation = {
    x: number;
    y: number;
};

function Wrapper() {
    const ref = useRef<any>();

    const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
    const [hovering, setHovering] = useState<boolean>(false);

    const onHover = useCallback<MouseEventHandler<HTMLDivElement>>(
        (event) => {
            if (hovering) {
                const target = ref.current as HTMLDivElement;

                const x = ((event.pageX - target.offsetLeft) / target.clientWidth - 0.5) * 40;
                const y = ((event.pageY - target.offsetTop) / target.clientHeight - 0.5) * 40;

                setRotation({ x: x, y: y });
            }
        },
        [hovering, setRotation, ref.current]
    );

    return (
        <>
            <motion.div
                className="grid grid-cols-1 grid-rows-1 place-items-center w-fit h-fit card"
                whileHover={{ rotateX: -rotation.x, rotateY: -rotation.y, originX: 0.5, originY: 0.5 }}
                transition={{ type: 'spring', stiffness: 80, bounce: 0.4 }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => {
                    setHovering(false);
                    setRotation({ x: 0, y: 0 });
                }}
                onMouseMove={onHover}
                ref={ref}
            >
                <div className="col-start-1 row-start-1 face back">
                    <Front />
                </div>
                <div className="col-start-1 row-start-1 face front">
                    <Back />
                </div>
            </motion.div>
        </>
    );
}

export default Wrapper;
