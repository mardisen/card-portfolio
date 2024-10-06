import Back from '../Back/Back';
import Front from '../Front/Front';

function Wrapper() {
    return (
        <div className="grid grid-cols-1 grid-rows-1 place-items-center w-fit h-fit card">
            <div className="col-start-1 row-start-1 face front">
                <Front />
            </div>
            <div className="col-start-1 row-start-1 face back">
                <Back />
            </div>
        </div>
    );
}

export default Wrapper;
