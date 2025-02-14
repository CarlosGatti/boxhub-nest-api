import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyCreateManyInput } from './family-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFamilyArgs {

    @Field(() => [FamilyCreateManyInput], {nullable:false})
    @Type(() => FamilyCreateManyInput)
    data!: Array<FamilyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
