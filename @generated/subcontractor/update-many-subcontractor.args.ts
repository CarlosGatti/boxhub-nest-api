import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorUpdateManyMutationInput } from './subcontractor-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubcontractorWhereInput } from './subcontractor-where.input';

@ArgsType()
export class UpdateManySubcontractorArgs {

    @Field(() => SubcontractorUpdateManyMutationInput, {nullable:false})
    @Type(() => SubcontractorUpdateManyMutationInput)
    data!: SubcontractorUpdateManyMutationInput;

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;
}
