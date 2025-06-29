import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorCreateManyInput } from './subcontractor-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubcontractorArgs {

    @Field(() => [SubcontractorCreateManyInput], {nullable:false})
    @Type(() => SubcontractorCreateManyInput)
    data!: Array<SubcontractorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
