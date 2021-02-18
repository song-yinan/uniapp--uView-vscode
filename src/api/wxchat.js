/*
 * @,@Author: ,: 宋一楠
 * @,@Date: ,: 2021-02-03 16:30:59
 * @,@LastEditTime: ,: 2021-02-18 09:49:36
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: 宋一楠
 * @,@FilePath: ,: /wxapp/src/api/login.js
 */
// 获取精品课列表
export function getWxchatApi(vm) {
    console.log(vm)
    let wxchatApi = {
         // 测试
       ceshi2:(params = {}) => vm.$u.get(`${vm.vuex_serverInfo.upgradeFamily}/curriculum/getCurriculumList`, params)
 
    }
    return wxchatApi;
 }