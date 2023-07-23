import { useState } from 'react';

import { ServerResponse } from '#types/models';

interface UseMutationState<T> {
  isFetching: boolean;
  data?: T;
  error?: object;
}

interface UseMutationResult<T> extends UseMutationState<T> {
  mutation: (data: T) => void;
}

export default function useMutation<T>(
  url: string,
  onSuccess?: (data: ServerResponse) => void,
  onError?: (error: ServerResponse) => void,
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    isFetching: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: T) {
    setState((prev) => ({ ...prev, isFetching: true }));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(data ? { body: JSON.stringify(data) } : {}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error }));
        if (onError) {
          onError(error);
        }
      })
      .finally(() => setState((prev) => ({ ...prev, isFetching: false })));
  }

  return { mutation, ...state };
}
