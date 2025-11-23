# Frontend Integration - Sistema de Aprovação de Moradores

Este documento contém todo o código necessário para integrar o sistema de aprovação de moradores no frontend.

## 📋 Índice
1. [Queries GraphQL](#queries-graphql)
2. [Mutations GraphQL](#mutations-graphql)
3. [Types TypeScript](#types-typescript)
4. [Hooks React](#hooks-react)
5. [Componentes React](#componentes-react)
6. [Página Admin](#página-admin)

---

## 1. Queries GraphQL

### `graphql/queries/pendingResidents.graphql`
```graphql
query PendingResidents {
  pendingResidents {
    id
    email
    firstName
    lastName
    apartment
    createdAt
    profilePicture
    isApprovedResident
  }
}
```

### `graphql/queries/approvedResidents.graphql` (opcional)
```graphql
query ApprovedResidents {
  users {
    id
    email
    firstName
    lastName
    apartment
    createdAt
    isApprovedResident
  }
}
```

---

## 2. Mutations GraphQL

### `graphql/mutations/approveResident.graphql`
```graphql
mutation ApproveResident($userId: Float!) {
  approveResident(userId: $userId) {
    success
    message
  }
}
```

### `graphql/mutations/rejectResident.graphql`
```graphql
mutation RejectResident($userId: Float!, $reason: String) {
  rejectResident(userId: $userId, reason: $reason) {
    success
    message
  }
}
```

---

## 3. Types TypeScript

### `types/resident.ts`
```typescript
export interface Resident {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  apartment?: string | null;
  createdAt: string;
  profilePicture?: string | null;
  isApprovedResident: boolean;
}

export interface BaseResult {
  success: boolean;
  message: string;
}

export interface PendingResidentsResponse {
  pendingResidents: Resident[];
}

export interface ApproveResidentResponse {
  approveResident: BaseResult;
}

export interface RejectResidentResponse {
  rejectResident: BaseResult;
}
```

---

## 4. Hooks React

### `hooks/usePendingResidents.ts`
```typescript
import { useQuery } from '@apollo/client';
import { PENDING_RESIDENTS_QUERY } from '../graphql/queries/pendingResidents';
import { PendingResidentsResponse, Resident } from '../types/resident';

export const usePendingResidents = () => {
  const { data, loading, error, refetch } = useQuery<PendingResidentsResponse>(
    PENDING_RESIDENTS_QUERY,
    {
      fetchPolicy: 'network-only', // Sempre buscar dados atualizados
      errorPolicy: 'all',
    }
  );

  return {
    residents: (data?.pendingResidents || []) as Resident[],
    loading,
    error,
    refetch,
  };
};
```

### `hooks/useApproveResident.ts`
```typescript
import { useMutation } from '@apollo/client';
import { APPROVE_RESIDENT_MUTATION } from '../graphql/mutations/approveResident';
import { ApproveResidentResponse } from '../types/resident';
import { PENDING_RESIDENTS_QUERY } from '../graphql/queries/pendingResidents';

export const useApproveResident = () => {
  const [approveResident, { loading, error }] = useMutation<ApproveResidentResponse>(
    APPROVE_RESIDENT_MUTATION,
    {
      refetchQueries: [{ query: PENDING_RESIDENTS_QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const handleApprove = async (userId: number) => {
    try {
      const result = await approveResident({
        variables: { userId },
      });
      return result.data?.approveResident;
    } catch (err) {
      console.error('Error approving resident:', err);
      throw err;
    }
  };

  return {
    approveResident: handleApprove,
    loading,
    error,
  };
};
```

### `hooks/useRejectResident.ts`
```typescript
import { useMutation } from '@apollo/client';
import { REJECT_RESIDENT_MUTATION } from '../graphql/mutations/rejectResident';
import { RejectResidentResponse } from '../types/resident';
import { PENDING_RESIDENTS_QUERY } from '../graphql/queries/pendingResidents';

export const useRejectResident = () => {
  const [rejectResident, { loading, error }] = useMutation<RejectResidentResponse>(
    REJECT_RESIDENT_MUTATION,
    {
      refetchQueries: [{ query: PENDING_RESIDENTS_QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const handleReject = async (userId: number, reason?: string) => {
    try {
      const result = await rejectResident({
        variables: { userId, reason },
      });
      return result.data?.rejectResident;
    } catch (err) {
      console.error('Error rejecting resident:', err);
      throw err;
    }
  };

  return {
    rejectResident: handleReject,
    loading,
    error,
  };
};
```

---

## 5. Componentes React

### `components/admin/PendingResidentCard.tsx`
```typescript
import React, { useState } from 'react';
import { Resident } from '../../types/resident';

interface PendingResidentCardProps {
  resident: Resident;
  onApprove: (userId: number) => Promise<void>;
  onReject: (userId: number, reason?: string) => Promise<void>;
  isProcessing?: boolean;
}

export const PendingResidentCard: React.FC<PendingResidentCardProps> = ({
  resident,
  onApprove,
  onReject,
  isProcessing = false,
}) => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApprove = async () => {
    setIsSubmitting(true);
    try {
      await onApprove(resident.id);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReject = async () => {
    setIsSubmitting(true);
    try {
      await onReject(resident.id, rejectReason || undefined);
      setShowRejectModal(false);
      setRejectReason('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-yellow-500">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {resident.profilePicture ? (
                <img
                  src={resident.profilePicture}
                  alt={`${resident.firstName} ${resident.lastName}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">
                    {resident.firstName[0]}{resident.lastName[0]}
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {resident.firstName} {resident.lastName}
                </h3>
                <p className="text-sm text-gray-600">{resident.email}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {resident.apartment && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Apartamento:</span>
                  <span>{resident.apartment}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">Data de cadastro:</span>
                <span>{formatDate(resident.createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={handleApprove}
              disabled={isProcessing || isSubmitting}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Processando...' : 'Aprovar'}
            </button>
            <button
              onClick={() => setShowRejectModal(true)}
              disabled={isProcessing || isSubmitting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Rejeitar
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Rejeição */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Rejeitar Morador</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tem certeza que deseja rejeitar o cadastro de{' '}
              <strong>{resident.firstName} {resident.lastName}</strong>?
            </p>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Motivo da rejeição (opcional):
            </label>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Ex: Documentação incompleta..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
              rows={3}
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectReason('');
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleReject}
                disabled={isSubmitting}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Rejeitando...' : 'Confirmar Rejeição'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
```

### `components/admin/PendingResidentsList.tsx`
```typescript
import React from 'react';
import { usePendingResidents } from '../../hooks/usePendingResidents';
import { useApproveResident } from '../../hooks/useApproveResident';
import { useRejectResident } from '../../hooks/useRejectResident';
import { PendingResidentCard } from './PendingResidentCard';
import { toast } from 'react-toastify'; // ou sua biblioteca de toast preferida

export const PendingResidentsList: React.FC = () => {
  const { residents, loading, error, refetch } = usePendingResidents();
  const { approveResident, loading: approving } = useApproveResident();
  const { rejectResident, loading: rejecting } = useRejectResident();

  const handleApprove = async (userId: number) => {
    try {
      const result = await approveResident(userId);
      if (result?.success) {
        toast.success(result.message || 'Morador aprovado com sucesso!');
        refetch();
      } else {
        toast.error('Erro ao aprovar morador');
      }
    } catch (err: any) {
      toast.error(err.message || 'Erro ao aprovar morador');
    }
  };

  const handleReject = async (userId: number, reason?: string) => {
    try {
      const result = await rejectResident(userId, reason);
      if (result?.success) {
        toast.success(result.message || 'Morador rejeitado');
        refetch();
      } else {
        toast.error('Erro ao rejeitar morador');
      }
    } catch (err: any) {
      toast.error(err.message || 'Erro ao rejeitar morador');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">
          Erro ao carregar moradores pendentes: {error.message}
        </p>
        <button
          onClick={() => refetch()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (residents.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <p className="text-green-800 text-lg font-semibold">
          🎉 Nenhum morador pendente!
        </p>
        <p className="text-green-600 mt-2">
          Todos os moradores foram processados.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Moradores Pendentes ({residents.length})
        </h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Atualizar
        </button>
      </div>

      <div>
        {residents.map((resident) => (
          <PendingResidentCard
            key={resident.id}
            resident={resident}
            onApprove={handleApprove}
            onReject={handleReject}
            isProcessing={approving || rejecting}
          />
        ))}
      </div>
    </div>
  );
};
```

---

## 6. Página Admin

### `pages/admin/residents.tsx` ou `app/admin/residents/page.tsx` (Next.js App Router)
```typescript
import React from 'react';
import { PendingResidentsList } from '../../components/admin/PendingResidentsList';
import { useAuth } from '../../hooks/useAuth'; // Seu hook de autenticação
import { useRouter } from 'next/router'; // ou useRouter do next/navigation para App Router

const AdminResidentsPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!authLoading && (!user || !user.isAdmin)) {
      router.push('/'); // Redirecionar se não for admin
    }
  }, [user, authLoading, router]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user || !user.isAdmin) {
    return null; // Ou componente de acesso negado
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Painel de Administração
          </h1>
          <p className="mt-2 text-gray-600">
            Gerencie as aprovações de moradores
          </p>
        </div>

        <PendingResidentsList />
      </div>
    </div>
  );
};

export default AdminResidentsPage;
```

---

## 7. Arquivos GraphQL (se usar codegen)

### `graphql/queries/pendingResidents.ts`
```typescript
import { gql } from '@apollo/client';

export const PENDING_RESIDENTS_QUERY = gql`
  query PendingResidents {
    pendingResidents {
      id
      email
      firstName
      lastName
      apartment
      createdAt
      profilePicture
      isApprovedResident
    }
  }
`;
```

### `graphql/mutations/approveResident.ts`
```typescript
import { gql } from '@apollo/client';

export const APPROVE_RESIDENT_MUTATION = gql`
  mutation ApproveResident($userId: Float!) {
    approveResident(userId: $userId) {
      success
      message
    }
  }
`;
```

### `graphql/mutations/rejectResident.ts`
```typescript
import { gql } from '@apollo/client';

export const REJECT_RESIDENT_MUTATION = gql`
  mutation RejectResident($userId: Float!, $reason: String) {
    rejectResident(userId: $userId, reason: $reason) {
      success
      message
    }
  }
`;
```

---

## 8. Exemplo de uso completo (sem Apollo Client)

Se você não usa Apollo Client, aqui está um exemplo com fetch:

### `services/residentService.ts`
```typescript
import { Resident, BaseResult } from '../types/resident';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/graphql';

const graphqlRequest = async (query: string, variables?: any) => {
  const token = localStorage.getItem('token'); // ou seu método de armazenar token

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error('Network error');
  }

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data;
};

export const getPendingResidents = async (): Promise<Resident[]> => {
  const query = `
    query {
      pendingResidents {
        id
        email
        firstName
        lastName
        apartment
        createdAt
        profilePicture
        isApprovedResident
      }
    }
  `;

  const data = await graphqlRequest(query);
  return data.pendingResidents;
};

export const approveResident = async (userId: number): Promise<BaseResult> => {
  const mutation = `
    mutation ApproveResident($userId: Float!) {
      approveResident(userId: $userId) {
        success
        message
      }
    }
  `;

  const data = await graphqlRequest(mutation, { userId });
  return data.approveResident;
};

export const rejectResident = async (
  userId: number,
  reason?: string
): Promise<BaseResult> => {
  const mutation = `
    mutation RejectResident($userId: Float!, $reason: String) {
      rejectResident(userId: $userId, reason: $reason) {
        success
        message
      }
    }
  `;

  const data = await graphqlRequest(mutation, { userId, reason });
  return data.rejectResident;
};
```

---

## 9. Checklist de Integração

- [ ] Criar arquivos de queries GraphQL
- [ ] Criar arquivos de mutations GraphQL
- [ ] Criar types TypeScript
- [ ] Criar hooks React (ou services)
- [ ] Criar componentes React
- [ ] Criar página admin
- [ ] Adicionar rota protegida (apenas admin)
- [ ] Testar aprovação de morador
- [ ] Testar rejeição de morador
- [ ] Verificar envio de emails
- [ ] Adicionar notificações/toasts
- [ ] Adicionar loading states
- [ ] Adicionar tratamento de erros

---

## 10. Notas Importantes

1. **Autenticação**: Certifique-se de que o token JWT está sendo enviado em todas as requisições
2. **Permissões**: O backend verifica `isAdmin: true`, então o usuário precisa ter essa flag no banco
3. **Refetch**: Após aprovar/rejeitar, a lista é atualizada automaticamente
4. **Emails**: Os emails são enviados automaticamente pelo backend
5. **Estilos**: Os exemplos usam Tailwind CSS, ajuste conforme seu projeto

---

## 11. Variáveis de Ambiente

Certifique-se de ter configurado:
```env
NEXT_PUBLIC_API_URL=https://www.carlosgatti.com/graphql
# ou
NEXT_PUBLIC_API_URL=http://localhost:3000/graphql
```

---

Pronto! Todo o código necessário está aqui. Adapte conforme sua estrutura de projeto.

