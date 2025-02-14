import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateNestedOneWithoutThemesInput } from '../process/process-create-nested-one-without-themes.input';

@InputType()
export class ThemeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProcessCreateNestedOneWithoutThemesInput, {nullable:false})
    process!: ProcessCreateNestedOneWithoutThemesInput;
}
