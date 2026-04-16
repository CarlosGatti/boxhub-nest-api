import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectServiceType } from './defined-project-service-type.enum';

@InputType()
export class NestedEnumDefinedProjectServiceTypeFilter {

    @Field(() => DefinedProjectServiceType, {nullable:true})
    equals?: keyof typeof DefinedProjectServiceType;

    @Field(() => [DefinedProjectServiceType], {nullable:true})
    in?: Array<keyof typeof DefinedProjectServiceType>;

    @Field(() => [DefinedProjectServiceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProjectServiceType>;

    @Field(() => NestedEnumDefinedProjectServiceTypeFilter, {nullable:true})
    not?: NestedEnumDefinedProjectServiceTypeFilter;
}
