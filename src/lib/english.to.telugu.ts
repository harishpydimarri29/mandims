const axios = require('axios');

export const convertEnglishToTelugu = async (text: string) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://inputtools.google.com/request?text=' + text + '&itc=te-t-i0-und&num=13&cp=0&cs=0&ie=utf-8&oe=utf-8&app=demopage',
        headers: {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9'
        }
    };

    return await axios.request(config)
        .then((response: any) => {
            console.log(JSON.stringify(response.data));
            return response.data?.[1]?.[0]?.[1];
        })
        .catch((error: any) => {
            console.log(error);
        });
}

export const translateEnglishToTelugu = async (text: string) => {
    text = text.replace(" ", "%20");
    let data = 'async=translate,sl:en,tl:te,st:' + text + ',id:1718522410978,qc:true,ac:false,_id:tw-async-translate,_pms:s,_fmt:pc';

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.google.com/async/translate?vet=12ahUKEwje1cnTyt-GAxU9SmwGHXQpBocQqDh6BAgFEDI..i&ei=8ZFuZp6ZO72UseMP9NKYuAg&opi=89978449&rlz=1C5GCCM_enIN1113IN1113&yv=3&cs=1&_fmt=pc',
        headers: {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'dnt': '1',
            'origin': 'https://www.google.com',
            'priority': 'u=1, i',
            'referer': 'https://www.google.com/',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"arm"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version-list': '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.56", "Google Chrome";v="126.0.6478.56"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"macOS"',
            'sec-ch-ua-platform-version': '"14.5.0"',
            'sec-ch-ua-wow64': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-dos-behavior': 'Embed'
        },
        data: data
    };

    return axios.request(config)
        .then((response: any) => {
            console.log("Raw Response : ", response.data);
            let regExp = /<span id="tw-answ-target-text">(.*?)<\/span>/;
            let translation = response.data?.match(regExp)?.[1];
            console.log("Telugu Translation : ", translation);
            return translation;
        })
        .catch((error: any) => {
            console.log(error);
        });

}