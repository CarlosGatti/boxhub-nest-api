import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from './defined-academy-content-status.enum';

@InputType()
export class EnumDefinedAcademyContentStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyContentStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyContentStatus;
}
