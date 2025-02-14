import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeUpdateManyMutationInput } from './theme-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ThemeWhereInput } from './theme-where.input';

@ArgsType()
export class UpdateManyThemeArgs {

    @Field(() => ThemeUpdateManyMutationInput, {nullable:false})
    @Type(() => ThemeUpdateManyMutationInput)
    data!: ThemeUpdateManyMutationInput;

    @Field(() => ThemeWhereInput, {nullable:true})
    @Type(() => ThemeWhereInput)
    where?: ThemeWhereInput;
}
