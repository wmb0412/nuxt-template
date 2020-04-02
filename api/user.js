import request from '~/plugins/axios.js'
/* 
	@description 账号登录
 */
export  function usrLogin(data){
  return request.post('/apiservice/usr/UsrLogin',data)
}
