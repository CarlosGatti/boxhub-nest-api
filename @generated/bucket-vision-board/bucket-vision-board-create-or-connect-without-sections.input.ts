import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutSectionsInput } from './bucket-vision-board-create-without-sections.input';

@InputType()
export class BucketVisionBoardCreateOrConnectWithoutSectionsInput {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardCreateWithoutSectionsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutSectionsInput)
    create!: BucketVisionBoardCreateWithoutSectionsInput;
}
