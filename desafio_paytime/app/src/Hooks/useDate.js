const getBrazilianDate = (date)=>{
  
    let englishDate = date.substr(0,10)
    let dataBrasil =  englishDate.split('-').reverse().join('/')
    
    return dataBrasil
    }
    
    export default getBrazilianDate;