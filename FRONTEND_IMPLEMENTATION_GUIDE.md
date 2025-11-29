# 🎨 Guia de Implementação - Frontend Next.js (Discart-me)

Este documento detalha todas as mudanças necessárias no frontend baseado nas especificações do backend.

---

## 📋 Índice

1. [Perfil do Usuário - contactPhone](#1-perfil-do-usuário---contactphone)
2. [Badges de SALE / DONATION](#2-badges-de-sale--donation)
3. [Resumo Financeiro](#3-resumo-financeiro-no-topo-da-listagem)
4. [Marcar Item como SOLD / DONATED](#4-marcar-item-como-sold--donated)
5. [Little Library](#5-little-library)
6. [Queries e Mutations GraphQL](#6-queries-e-mutations-graphql)

---

## 1. Perfil do Usuário - contactPhone

### 1.1 Adicionar campo no registro

**Arquivo:** `pages/register.tsx` ou `app/register/page.tsx`

```tsx
// Adicionar campo no form
<input
  type="tel"
  name="contactPhone"
  placeholder="Contact Phone (optional)"
  value={formData.contactPhone || ''}
  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
  className="..."
/>
```

**Mutation GraphQL:**
```graphql
mutation Register($user: RegisterUserInput!) {
  register(user: $user) {
    user {
      id
      email
      firstName
      lastName
      contactPhone  # ← Adicionar aqui
    }
    token
  }
}
```

### 1.2 Adicionar campo na edição de perfil

**Arquivo:** `pages/profile/edit.tsx` ou `app/profile/edit/page.tsx`

```tsx
// Adicionar campo no form de edição
<input
  type="tel"
  name="contactPhone"
  placeholder="Contact Phone"
  value={formData.contactPhone || ''}
  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
  className="..."
/>
```

**Mutation GraphQL (se já existir updateProfile):**
```graphql
mutation UpdateProfile($data: UpdateUserInput!) {
  updateProfile(data: $data) {
    id
    firstName
    lastName
    contactPhone  # ← Adicionar aqui
    # ... outros campos
  }
}
```

### 1.3 Pre-popular campo no form de criação de item

**Arquivo:** `pages/items/create.tsx` ou `app/items/create/page.tsx`

```tsx
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '@/graphql/queries';

function CreateItemForm() {
  const { data: userData } = useQuery(GET_CURRENT_USER);
  const currentUser = userData?.me || userData?.currentUser;
  
  const [formData, setFormData] = useState({
    // ... outros campos
    contactPhone: currentUser?.contactPhone || '',  // ← Pre-popular
  });

  // Atualizar quando userData carregar
  useEffect(() => {
    if (currentUser?.contactPhone && !formData.contactPhone) {
      setFormData(prev => ({
        ...prev,
        contactPhone: currentUser.contactPhone
      }));
    }
  }, [currentUser]);

  return (
    <form>
      {/* ... outros campos */}
      <input
        type="tel"
        name="contactPhone"
        placeholder="Contact Phone"
        value={formData.contactPhone}
        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
        className="..."
      />
      {/* Permitir limpar o campo */}
      {formData.contactPhone && (
        <button
          type="button"
          onClick={() => setFormData({ ...formData, contactPhone: '' })}
          className="text-xs text-gray-400 hover:text-gray-300"
        >
          Clear
        </button>
      )}
    </form>
  );
}
```

---

## 2. Badges de SALE / DONATION

### 2.1 Componente de Card atualizado

**Arquivo:** `components/DiscartItemCard.tsx` ou similar

```tsx
interface DiscartItemCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    type: 'SELL' | 'DONATE';
    status: 'ACTIVE' | 'RESERVED' | 'SOLD' | 'DONATED';
    imageUrls: string[];
    category: string;
    condition: string;
    price?: number;
    // ... outros campos
  };
}

export function DiscartItemCard({ item }: DiscartItemCardProps) {
  const isSale = item.type === 'SELL';
  const isDonation = item.type === 'DONATE';
  const isActive = item.status === 'ACTIVE';
  const isSold = item.status === 'SOLD';
  const isDonated = item.status === 'DONATED';

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition">
      {/* Container da imagem com badge */}
      <div className="relative aspect-square w-full">
        <img
          src={item.imageUrls[0] || '/placeholder.jpg'}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Badge SALE */}
        {isSale && isActive && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-md">
            SALE
          </span>
        )}

        {/* Badge DONATION */}
        {isDonation && isActive && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold shadow-md">
            DONATION
          </span>
        )}

        {/* Badge SOLD */}
        {isSold && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gray-700 text-white text-xs font-semibold shadow-md">
            SOLD
          </span>
        )}

        {/* Badge DONATED */}
        {isDonated && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-md">
            DONATED
          </span>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-2">
          {item.description}
        </p>
        
        {/* Categoria e condição (sem badges grandes) */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>{item.category}</span>
          <span>•</span>
          <span>{item.condition}</span>
        </div>

        {/* Preço (se for venda) */}
        {isSale && item.price && (
          <div className="text-lg font-bold text-emerald-400">
            ${item.price.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 3. Resumo Financeiro no Topo da Listagem

### 3.1 Query GraphQL

**Arquivo:** `graphql/queries/discartSummary.ts`

```typescript
import { gql } from '@apollo/client';

export const GET_DISCART_SUMMARY = gql`
  query GetDiscartSummary {
    discartSummary {
      totalActiveSellCount
      totalActiveSellValue
      totalSoldCount
      totalDonatedCount
    }
  }
`;
```

### 3.2 Hook customizado

**Arquivo:** `hooks/useDiscartSummary.ts`

```typescript
import { useQuery } from '@apollo/client';
import { GET_DISCART_SUMMARY } from '@/graphql/queries/discartSummary';

export function useDiscartSummary() {
  const { data, loading, error } = useQuery(GET_DISCART_SUMMARY, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    summary: data?.discartSummary || {
      totalActiveSellCount: 0,
      totalActiveSellValue: 0,
      totalSoldCount: 0,
      totalDonatedCount: 0,
    },
    loading,
    error,
  };
}
```

### 3.3 Componente de Resumo

**Arquivo:** `components/DiscartSummary.tsx`

```tsx
import { useDiscartSummary } from '@/hooks/useDiscartSummary';

export function DiscartSummary() {
  const { summary, loading } = useDiscartSummary();

  if (loading) {
    return (
      <section className="mb-4 flex flex-wrap gap-4">
        <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-4 py-3 animate-pulse">
          <div className="h-4 bg-zinc-800 rounded w-32 mb-2"></div>
          <div className="h-3 bg-zinc-800 rounded w-24"></div>
        </div>
        <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-4 py-3 animate-pulse">
          <div className="h-4 bg-zinc-800 rounded w-32 mb-2"></div>
          <div className="h-3 bg-zinc-800 rounded w-24"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-4 flex flex-wrap gap-4 text-sm text-gray-100">
      <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-4 py-3">
        <div className="font-semibold">
          Active items for sale: {summary.totalActiveSellCount}
        </div>
        <div className="text-zinc-300">
          Total value: ${summary.totalActiveSellValue.toFixed(2)}
        </div>
      </div>

      <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-4 py-3">
        <div className="font-semibold">
          Items sold: {summary.totalSoldCount}
        </div>
        <div className="text-zinc-300">
          Items donated: {summary.totalDonatedCount}
        </div>
      </div>
    </section>
  );
}
```

### 3.4 Usar na página principal

**Arquivo:** `pages/discart.tsx` ou `app/discart/page.tsx`

```tsx
import { DiscartSummary } from '@/components/DiscartSummary';
import { DiscartItemCard } from '@/components/DiscartItemCard';

export default function DiscartPage() {
  // ... lógica de busca de itens

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discart-me Marketplace</h1>
      
      {/* Resumo financeiro */}
      <DiscartSummary />

      {/* Filtros */}
      {/* ... */}

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <DiscartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
```

---

## 4. Marcar Item como SOLD / DONATED

### 4.1 Mutation GraphQL

**Arquivo:** `graphql/mutations/updateDiscartItemStatus.ts`

```typescript
import { gql } from '@apollo/client';

export const UPDATE_DISCART_ITEM_STATUS = gql`
  mutation UpdateDiscartItemStatus($data: UpdateDiscartItemStatusInput!) {
    updateDiscartItemStatus(data: $data) {
      id
      status
      type
    }
  }
`;
```

### 4.2 Hook customizado

**Arquivo:** `hooks/useUpdateItemStatus.ts`

```typescript
import { useMutation } from '@apollo/client';
import { UPDATE_DISCART_ITEM_STATUS } from '@/graphql/mutations/updateDiscartItemStatus';
import { GET_DISCART_ITEMS } from '@/graphql/queries/discartItems';
import { GET_DISCART_SUMMARY } from '@/graphql/queries/discartSummary';

export function useUpdateItemStatus() {
  const [updateStatus, { loading }] = useMutation(UPDATE_DISCART_ITEM_STATUS, {
    refetchQueries: [
      { query: GET_DISCART_ITEMS },
      { query: GET_DISCART_SUMMARY },
    ],
  });

  const markAsSold = async (itemId: number) => {
    try {
      await updateStatus({
        variables: {
          data: {
            id: itemId,
            status: 'SOLD',
          },
        },
      });
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  const markAsDonated = async (itemId: number) => {
    try {
      await updateStatus({
        variables: {
          data: {
            id: itemId,
            status: 'DONATED',
          },
        },
      });
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    markAsSold,
    markAsDonated,
    loading,
  };
}
```

### 4.3 Botões no Card (se for owner)

**Arquivo:** `components/DiscartItemCard.tsx` (atualizar)

```tsx
import { useUpdateItemStatus } from '@/hooks/useUpdateItemStatus';
import { useAuth } from '@/hooks/useAuth'; // ou como você gerencia auth

export function DiscartItemCard({ item }: DiscartItemCardProps) {
  const { user } = useAuth();
  const { markAsSold, markAsDonated, loading } = useUpdateItemStatus();
  const isOwner = user?.id === item.createdBy?.id;

  const handleMarkAsSold = async () => {
    const result = await markAsSold(item.id);
    if (result.success) {
      // Toast de sucesso
      toast.success('Item marked as sold!');
    } else {
      toast.error('Failed to update status');
    }
  };

  const handleMarkAsDonated = async () => {
    const result = await markAsDonated(item.id);
    if (result.success) {
      toast.success('Item marked as donated!');
    } else {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="...">
      {/* ... conteúdo do card */}
      
      {/* Botões de ação (só se for owner) */}
      {isOwner && (
        <div className="mt-3 flex gap-2 text-xs px-4 pb-4">
          {item.status !== 'SOLD' && item.type === 'SELL' && (
            <button
              onClick={handleMarkAsSold}
              disabled={loading}
              className="px-2 py-1 rounded-md border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 disabled:opacity-50"
            >
              Mark as sold
            </button>
          )}

          {item.type === 'DONATE' && item.status !== 'DONATED' && (
            <button
              onClick={handleMarkAsDonated}
              disabled={loading}
              className="px-2 py-1 rounded-md border border-sky-500 text-sky-400 hover:bg-sky-500/10 disabled:opacity-50"
            >
              Mark as donated
            </button>
          )}
        </div>
      )}
    </div>
  );
}
```

---

## 5. Little Library

### 5.1 Garantir filtro por status ACTIVE

**Arquivo:** `pages/library.tsx` ou `app/library/page.tsx`

```tsx
import { useQuery } from '@apollo/client';
import { GET_DISCART_ITEMS } from '@/graphql/queries/discartItems';

export default function LittleLibraryPage() {
  const { data, loading } = useQuery(GET_DISCART_ITEMS, {
    variables: {
      category: 'BOOK',  // Filtrar por BOOK
      // Adicionar filtro de status se a query suportar
      // status: 'ACTIVE',  // Se o backend suportar filtro por status
    },
  });

  // Filtrar client-side se necessário
  const activeBooks = data?.discartItems?.filter(
    (item: any) => item.status === 'ACTIVE'
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Little Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeBooks.map((item: any) => (
          <DiscartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
```

---

## 6. Queries e Mutations GraphQL

### 6.1 Atualizar query de itens (se necessário)

**Arquivo:** `graphql/queries/discartItems.ts`

```typescript
import { gql } from '@apollo/client';

export const GET_DISCART_ITEMS = gql`
  query GetDiscartItems($type: DiscartItemType, $category: String, $search: String) {
    discartItems(type: $type, category: $category, search: $search) {
      id
      title
      description
      type
      price
      category
      condition
      status  # ← Incluir status
      imageUrls
      contactPhone
      pickupAddress
      createdBy {
        id
        firstName
        lastName
        apartment
        profilePicture
      }
      createdAt
    }
  }
`;
```

### 6.2 Atualizar mutation de criação

**Arquivo:** `graphql/mutations/createDiscartItem.ts`

```typescript
import { gql } from '@apollo/client';

export const CREATE_DISCART_ITEM = gql`
  mutation CreateDiscartItem($data: CreateDiscartItemInput!) {
    createDiscartItem(data: $data) {
      id
      title
      description
      type
      price
      category
      condition
      status
      contactPhone  # ← Incluir
      imageUrls
      createdBy {
        id
        firstName
        lastName
      }
    }
  }
`;
```

---

## ✅ Checklist de Implementação

### Backend (já feito ✅)
- [x] Schema Prisma atualizado
- [x] Migration criada
- [x] DTOs GraphQL criados
- [x] Service atualizado
- [x] Resolver atualizado

### Frontend (a fazer)
- [ ] Adicionar `contactPhone` no registro
- [ ] Adicionar `contactPhone` na edição de perfil
- [ ] Pre-popular `contactPhone` no form de criação de item
- [ ] Criar componente de badges (SALE/DONATION/SOLD/DONATED)
- [ ] Atualizar cards para usar badges
- [ ] Criar query `discartSummary`
- [ ] Criar componente `DiscartSummary`
- [ ] Adicionar resumo na página principal
- [ ] Criar mutation `updateDiscartItemStatus`
- [ ] Criar hook `useUpdateItemStatus`
- [ ] Adicionar botões de ação nos cards (se owner)
- [ ] Garantir filtro ACTIVE na Little Library
- [ ] Atualizar queries GraphQL para incluir `status` e `contactPhone`

---

## 🚀 Próximos Passos

1. **Implementar mudanças no frontend** seguindo este guia
2. **Testar todas as funcionalidades** localmente
3. **Fazer commit e push** para trigger do deploy automático
4. **Verificar** se o GitHub Actions fez deploy corretamente

---

**Nota:** Este guia assume que você está usando Apollo Client ou React Query. Ajuste conforme sua stack específica.

