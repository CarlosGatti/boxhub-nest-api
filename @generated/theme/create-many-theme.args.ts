import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeCreateManyInput } from './theme-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyThemeArgs {

    @Field(() => [ThemeCreateManyInput], {nullable:false})
    @Type(() => ThemeCreateManyInput)
    data!: Array<ThemeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
