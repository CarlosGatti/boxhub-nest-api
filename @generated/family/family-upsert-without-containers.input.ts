import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyUpdateWithoutContainersInput } from './family-update-without-containers.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutContainersInput } from './family-create-without-containers.input';
import { FamilyWhereInput } from './family-where.input';

@InputType()
export class FamilyUpsertWithoutContainersInput {

    @Field(() => FamilyUpdateWithoutContainersInput, {nullable:false})
    @Type(() => FamilyUpdateWithoutContainersInput)
    update!: FamilyUpdateWithoutContainersInput;

    @Field(() => FamilyCreateWithoutContainersInput, {nullable:false})
    @Type(() => FamilyCreateWithoutContainersInput)
    create!: FamilyCreateWithoutContainersInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;
}
