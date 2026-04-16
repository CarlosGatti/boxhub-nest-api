import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientCreateManyInput } from './defined-client-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedClientArgs {

    @Field(() => [DefinedClientCreateManyInput], {nullable:false})
    @Type(() => DefinedClientCreateManyInput)
    data!: Array<DefinedClientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
