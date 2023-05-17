const testEmail = (value)=>{
    const emailRegex = /^[a-z0-9_.]+@[a-z]{2,5}\.[a-z]{2,3}$/g
    return emailRegex.test(value)
}
// const testPhoneNumber = (value) =>{
//     const phoneNumberRegex = /^(\+98|0)9{1}\d{9}$/g
//     return phoneNumberRegex.test(value)
// }
    const phoneNumberRegex = /^(\+98|0)9{1}\d{9}$/g

export  {
  testEmail,
  phoneNumberRegex,
};