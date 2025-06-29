import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubcontractorArgs {

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;
}
