import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ThemeUncheckedCreateNestedManyWithoutProcessInput } from '../theme/theme-unchecked-create-nested-many-without-process.input';

@InputType()
export class ProcessUncheckedCreateWithoutPillarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ThemeUncheckedCreateNestedManyWithoutProcessInput, {nullable:true})
    themes?: ThemeUncheckedCreateNestedManyWithoutProcessInput;
}
