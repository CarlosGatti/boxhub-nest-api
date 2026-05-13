import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionCreateManyInput } from './defined-proposal-section-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedProposalSectionArgs {

    @Field(() => [DefinedProposalSectionCreateManyInput], {nullable:false})
    @Type(() => DefinedProposalSectionCreateManyInput)
    data!: Array<DefinedProposalSectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
