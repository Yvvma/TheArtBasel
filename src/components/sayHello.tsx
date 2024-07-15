type userName  =  {
    name:string,
    messageCount: number,
    isLogged: boolean
}

export const SayHello = (props:userName) => {
    return (
    <div>
        <h1>{
        props.isLogged ? `Hi ${props.name}, you've got ${props.messageCount} messages.` : 'You are not logged in'
        }
    </h1>
    
    </div>
    )
}