import {cache} from 'react';
import { client } from ".."
import { IResponse } from '@/common/types/response.type';
import { DEV_MODE } from '@/common/constanst';
import { IUser } from '@/common/types/user.type';




class User {
    getUser = cache(async () => {
        const {message, statusCode} = await client.postBody<IResponse<IUser>>('/users/auth');

        if(message) {
            // useUserStore.getState().setUser(message);

            return message;
        }
    });

    updateField = async () => {
        if(DEV_MODE) return null;
        const {message, statusCode} = await client.postBody<IResponse<IUser>>('/users/update');

        return message;
    }


}
export const UserClient = new User();