import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppCreateInput } from './app-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppArgs {

    @Field(() => AppCreateInput, {nullable:false})
    @Type(() => AppCreateInput)
    data!: AppCreateInput;
}
