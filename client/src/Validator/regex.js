const testEmail = (value)=>{
    const emailRegex = /^[a-z0-9_.]+@[a-z]{2,5}\.[a-z]{2,3}$/g
    return emailRegex.test(value)
}

export default{
    testEmail
}