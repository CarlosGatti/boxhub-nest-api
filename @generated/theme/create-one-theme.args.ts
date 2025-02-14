import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeCreateInput } from './theme-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneThemeArgs {

    @Field(() => ThemeCreateInput, {nullable:false})
    @Type(() => ThemeCreateInput)
    data!: ThemeCreateInput;
}
