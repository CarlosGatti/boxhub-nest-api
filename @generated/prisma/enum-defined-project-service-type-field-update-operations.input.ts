import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectServiceType } from './defined-project-service-type.enum';

@InputType()
export class EnumDefinedProjectServiceTypeFieldUpdateOperationsInput {

    @Field(() => DefinedProjectServiceType, {nullable:true})
    set?: keyof typeof DefinedProjectServiceType;
}
