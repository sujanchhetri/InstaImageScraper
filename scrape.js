const express = require('express')
const cheerio = require('cheerio')
const download = require ('node-image-downloader')
const request = require('request')

const app=express()

app.get('/',(req,res)=>{
    var url="https://www.instagram.com/_s_ujan/?hl=en"  

    request(url,(error,response,html)=>{
        if(!error){
            var $=cheerio.load(html)
        
            var imagesrc=$('.RR-M- h5uC0').attr('src')
            
            download({
                imgs:[
                    {
                        uri:'https://instagram.fblr6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79174204_2576536649290659_5889444668797616128_n.jpg?_nc_ht=instagram.fblr6-1.fna.fbcdn.net&_nc_ohc=YG0HsT1CnIsAX8nSojE&oh=3d65139aca9c61fdca873f41cfb5281b&oe=5EEA1984'
                    }
                    ],
                dest:'./downloads'
            })
            .then((info)=>{
                console.log("Download complete")
            process.exit(1)
            })
        }
    })
})
app.listen(3000)