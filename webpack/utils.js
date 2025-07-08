/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2020-03-03 15:29:21
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2025-07-08 16:51:16
 */
const path = require('path')

exports.resolve = function resolve(...args) {
  return path.join(__dirname, '..', ...args)
}
