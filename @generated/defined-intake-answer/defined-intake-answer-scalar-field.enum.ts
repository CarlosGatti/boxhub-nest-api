import { registerEnumType } from '@nestjs/graphql';

export enum DefinedIntakeAnswerScalarFieldEnum {
    id = "id",
    intakeFormId = "intakeFormId",
    questionKey = "questionKey",
    questionLabel = "questionLabel",
    answerType = "answerType",
    answerValue = "answerValue",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedIntakeAnswerScalarFieldEnum, { name: 'DefinedIntakeAnswerScalarFieldEnum', description: undefined })
