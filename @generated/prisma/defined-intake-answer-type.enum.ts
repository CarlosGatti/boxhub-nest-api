import { registerEnumType } from '@nestjs/graphql';

export enum DefinedIntakeAnswerType {
    TEXT = "TEXT",
    LONG_TEXT = "LONG_TEXT",
    NUMBER = "NUMBER",
    BOOLEAN = "BOOLEAN",
    SELECT = "SELECT",
    MULTI_SELECT = "MULTI_SELECT",
    JSON = "JSON"
}


registerEnumType(DefinedIntakeAnswerType, { name: 'DefinedIntakeAnswerType', description: undefined })
