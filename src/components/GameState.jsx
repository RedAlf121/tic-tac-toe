export default function GameState({value, state=null}){
    const valueClass = value.toLowerCase()
    let output = <h2 className={valueClass}>Is {value} turn</h2>
    if(state){
        if(state === 'tie'){
            value = ''
            output = <h2 className={value}>Is tie</h2>
        }else{
            output = <h2 className={valueClass}>Is {value} winner</h2>
        }
    }
    
    return(
        <>
        {output}    
        </>
    )
}