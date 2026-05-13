import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutProposalsInput } from './defined-client-update-without-proposals.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutProposalsInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutProposalsInput)
    data!: DefinedClientUpdateWithoutProposalsInput;
}
