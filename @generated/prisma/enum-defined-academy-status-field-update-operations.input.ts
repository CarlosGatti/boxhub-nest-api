import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyStatus } from './defined-academy-status.enum';

@InputType()
export class EnumDefinedAcademyStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyStatus;
}
