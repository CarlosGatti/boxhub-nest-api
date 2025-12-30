import { AssetType, Prisma } from '@prisma/client';
import { ConflictException, Injectable } from '@nestjs/common';

import { CreateAssetDto } from './dto/create-asset.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AssetsService {
  constructor(private readonly prisma: PrismaService) {}

  async search(query: string, limit: number = 20) {
    const where: Prisma.AssetWhereInput = {
      OR: [
        { ticker: { contains: query, mode: 'insensitive' } },
        { name: { contains: query, mode: 'insensitive' } },
      ],
    };

    return this.prisma.asset.findMany({
      where,
      take: limit,
      orderBy: [
        { ticker: 'asc' },
        { name: 'asc' },
      ],
    });
  }

  async create(createAssetDto: CreateAssetDto) {
    // Check uniqueness: (type, ticker) must be unique when ticker is not null
    if (createAssetDto.ticker) {
      const existing = await this.prisma.asset.findUnique({
        where: {
          unique_asset_ticker: {
            type: createAssetDto.type,
            ticker: createAssetDto.ticker,
          },
        },
      });

      if (existing) {
        throw new ConflictException(
          `Asset with type ${createAssetDto.type} and ticker ${createAssetDto.ticker} already exists`
        );
      }
    }

    return this.prisma.asset.create({
      data: {
        type: createAssetDto.type,
        ticker: createAssetDto.ticker || null,
        name: createAssetDto.name,
        currency: createAssetDto.currency || 'USD',
        exchange: createAssetDto.exchange || null,
        metadata: createAssetDto.metadata || undefined,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.asset.findUnique({
      where: { id },
      include: {
        pricePoints: {
          take: 1,
          orderBy: { asOf: 'desc' },
        },
      },
    });
  }

  async findByTicker(type: AssetType, ticker: string) {
    return this.prisma.asset.findUnique({
      where: {
        unique_asset_ticker: {
          type,
          ticker,
        },
      },
    });
  }
}
