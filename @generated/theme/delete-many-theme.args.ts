import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyThemeArgs {

    @Field(() => ThemeWhereInput, {nullable:true})
    @Type(() => ThemeWhereInput)
    where?: ThemeWhereInput;
}
