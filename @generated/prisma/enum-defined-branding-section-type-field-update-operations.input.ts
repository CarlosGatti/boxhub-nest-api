import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from './defined-branding-section-type.enum';

@InputType()
export class EnumDefinedBrandingSectionTypeFieldUpdateOperationsInput {

    @Field(() => DefinedBrandingSectionType, {nullable:true})
    set?: keyof typeof DefinedBrandingSectionType;
}
