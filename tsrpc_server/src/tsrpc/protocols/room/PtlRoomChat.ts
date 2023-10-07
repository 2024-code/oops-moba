/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-04 14:13:29
 */
import { BaseRequest, BaseResponse } from "../base";

/** 房间聊天请求数据 */
export interface ReqRoomChat extends BaseRequest {
    /** 聊天内容 */
    content: string
}

/** 房间聊天响应数据 */
export interface ResRoomChat extends BaseResponse {

}