import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceCreateManyInput } from './insurance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInsuranceArgs {

    @Field(() => [InsuranceCreateManyInput], {nullable:false})
    @Type(() => InsuranceCreateManyInput)
    data!: Array<InsuranceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
