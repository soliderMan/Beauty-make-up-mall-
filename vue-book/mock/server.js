let http=require('http');
let url=require('url');
let sliders=require('./sliders');
let fs=require('fs');

function read(callback) { //读的时候肯定是异步读的
 fs.readFile('./product.json','utf8',function (err,data) {
   //做个判断 当err的时候说明没有文件，或者data是空的时候 说明文件里是空的字符串 就返回空数组
   if(err || data==='') return callback([]);
 //  如果有数据 就还是调用callback来获取数据
   callback(JSON.parse(data))
 })
}

function write(data,cb) {
  fs.writeFile('./product.json',JSON.stringify(data),cb)
}
//让这个方法执行 run下 看能否拿到数据
// read(function (data) {
//   console.log(data);
// })
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  //获取轮播图接口
  if(pathname==='/api/sliders'){
    return res.end(JSON.stringify(sliders));

  }
//  获取产品列表接口 首先要把json里的读取出来 用fs
  if(pathname==='/api/hot'){  //让读的那个函数在这执行 拿到数据
    read(function (data) {
      let products=data.reverse().slice(0,9) //reverse:从后往前
      res.end(JSON.stringify(products));
    })
      return
  }
  if(pathname==='/api/products'){
    let id=parseInt(query.id);
    switch (req.method){
      case 'GET':
       if(!isNaN(id)){
         // read(function (products) {
         //   res.end('./products',)
         // })
       }else{
         read(function (products) {
           res.end(JSON.stringify(products.reverse()))
         })
       }
        break;
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        read(function (data) {
          console.log(1);
          data=data.filter(item=>{
            return item.id !==id;
          })
          write(data,function () {
            res.end(JSON.stringify({}));
          })
        })
        break;
    }


  }

}).listen(5000,()=>console.log('监听5000成功'))
