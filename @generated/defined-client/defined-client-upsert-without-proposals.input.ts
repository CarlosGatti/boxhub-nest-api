import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutProposalsInput } from './defined-client-update-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutProposalsInput } from './defined-client-create-without-proposals.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutProposalsInput {

    @Field(() => DefinedClientUpdateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutProposalsInput)
    update!: DefinedClientUpdateWithoutProposalsInput;

    @Field(() => DefinedClientCreateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutProposalsInput)
    create!: DefinedClientCreateWithoutProposalsInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
