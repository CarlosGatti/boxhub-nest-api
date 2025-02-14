import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessCreateManyInput } from './process-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProcessArgs {

    @Field(() => [ProcessCreateManyInput], {nullable:false})
    @Type(() => ProcessCreateManyInput)
    data!: Array<ProcessCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
