import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceStatus } from './defined-academy-resource-status.enum';

@InputType()
export class EnumDefinedAcademyResourceStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyResourceStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyResourceStatus;
}
