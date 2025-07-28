
export default function Square({value='',setValue=()=>console.log('no function')}) {
    return (
        <button className={"square " + value.toLowerCase()} onClick={setValue}>
            {value}
        </button>
    );
}

