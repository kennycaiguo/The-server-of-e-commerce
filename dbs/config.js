export default{
  dbs:"mongodb://39.107.68.213:27000/react",
  redis:{
    get host(){
      return "127.0.0.1"
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '1037796421@qq.com'
    },
    get pass(){
      // return 'fitagfwmumxtbbgi'
      return 'ehjtmghvxenrbdad'

    },
    get code(){
      return () =>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return () =>{
        return new Date().getTime()+ 60*1000
      }
    }
  },
  

}