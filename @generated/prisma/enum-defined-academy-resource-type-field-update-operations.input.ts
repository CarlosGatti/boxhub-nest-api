import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from './defined-academy-resource-type.enum';

@InputType()
export class EnumDefinedAcademyResourceTypeFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyResourceType, {nullable:true})
    set?: keyof typeof DefinedAcademyResourceType;
}
