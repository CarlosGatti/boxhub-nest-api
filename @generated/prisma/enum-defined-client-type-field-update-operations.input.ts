import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientType } from './defined-client-type.enum';

@InputType()
export class EnumDefinedClientTypeFieldUpdateOperationsInput {

    @Field(() => DefinedClientType, {nullable:true})
    set?: keyof typeof DefinedClientType;
}
