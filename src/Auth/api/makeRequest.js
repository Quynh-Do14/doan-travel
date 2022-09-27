const request = {
    get: async (url,data) => {
        url = new URL(url)
        Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
        // chờ dữ liệu từ frtch trả về
        let result = await fetch(url)
        
        if (result.ok) {
            return result.json()
        } else {
            return {
                status: false,
                data: result.json(),
                message: "connect server failed"
            }
        }
    },
    //POST
    post: async (url, data) => {
        //
         let token = ""
         let userAuth = localStorage.getItem("user_auth")
         if(userAuth)
            token = JSON.parse(userAuth).token
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token : token
            },
            body: JSON.stringify(data)
        })
        if (result.ok) {
            return result.json()
        } else {
            return {
                status: false,
                data: {},
                message: "connect server failed"
            }
        }
    },
    
}
export default request;
