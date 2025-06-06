import { registerEnumType } from '@nestjs/graphql';

export enum LogAction {
    USER_LOGIN = "USER_LOGIN",
    USER_LOGOUT = "USER_LOGOUT",
    ITEM_CREATED = "ITEM_CREATED",
    ITEM_DELETED = "ITEM_DELETED",
    CONTAINER_CREATED = "CONTAINER_CREATED",
    CONTAINER_DELETED = "CONTAINER_DELETED",
    BUTTON_CLICKED = "BUTTON_CLICKED",
    PAGE_VIEWED = "PAGE_VIEWED",
    SEARCH_USED = "SEARCH_USED",
    CUSTOM_ACTION = "CUSTOM_ACTION"
}


registerEnumType(LogAction, { name: 'LogAction', description: undefined })
