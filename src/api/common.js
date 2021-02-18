/*
 * @,@Author: ,: 宋一楠
 * @,@Date: ,: 2021-02-03 16:31:26
 * @,@LastEditTime: ,: 2021-02-18 09:49:23
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: 此为常用接口集合
 * @,@FilePath: ,: /wxapp/src/api/common.js
 */


export function getCommonApi(vm) {
   let commonApi = {
       // 测试
       ceshi1:(params = {}) => vm.$u.get(`${vm.vuex_serverInfo.upgradeFamily}/curriculum/getCurriculumList`, params)

   }
   return commonApi;
}