const baseURL = 'https://api.telegram.org/bot6866782922:AAEILNR2vWP1crapZUHqCn_nZMJyM1mx9vA'


export const sendMessage = async (message) => {
    const url = `${baseURL}/sendMessage?chat_id=-4580387645&text=${message}`

    const response = await fetch(url)
    
    console.log('res: ', response);
    
}