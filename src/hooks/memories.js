import { useMutation, useQuery, useQueryClient } from "react-query";

import { memories } from "../services";

export function useMutateMemory() {
  const queryClient = useQueryClient();

  const { mutate: createMemory } = useMutation({
    mutationFn: memories.createMemory,
    onSuccess: (res) => {
      console.log(res);
      //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, invalidar query, etc.)
    },
  });

  const { mutate: deleteMemory } = useMutation({
    mutationFn: memories.deleteMemory,
    onSuccess: (res) => {
      console.log(res);
      //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, etc.)
    },
  });

  const { mutate: updateMemory } = useMutation({
    mutationFn: memories.updateMemory,
    onSuccess: (res) => {
      console.log(res);
      //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, etc.)
    },
  });

  return {
    createMemory,
    deleteMemory,
    updateMemory,
  };
}

export function useMemories() {
  const { data: allMemories, isLoading } = useQuery({
    queryKey: ["Memories"],
    queryFn: memories.getAllMemories,
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { allMemories, isLoading };
}

export function useUserMemories() {
  const { data: allUserMemories, isLoading } = useQuery({
    queryKey: ["UserMemories"],
    queryFn: memories.getMemoriesByUser,
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { allUserMemories, isLoading };
}

export function useMemory(title) {
  const { data: memory, isLoading } = useQuery({
    queryKey: ["Memory", title],
    queryFn: memories.getMemoryByTitle,
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { memory, isLoading };
}
