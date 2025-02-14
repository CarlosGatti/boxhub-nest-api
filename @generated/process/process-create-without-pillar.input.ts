import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeCreateNestedManyWithoutProcessInput } from '../theme/theme-create-nested-many-without-process.input';

@InputType()
export class ProcessCreateWithoutPillarInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ThemeCreateNestedManyWithoutProcessInput, {nullable:true})
    themes?: ThemeCreateNestedManyWithoutProcessInput;
}
