import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppCreateManyInput } from './app-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppArgs {

    @Field(() => [AppCreateManyInput], {nullable:false})
    @Type(() => AppCreateManyInput)
    data!: Array<AppCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
