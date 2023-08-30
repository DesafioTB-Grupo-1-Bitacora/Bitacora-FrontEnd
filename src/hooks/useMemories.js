import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation } from "wouter";
import { memories } from "../services";
import { useLogin } from "./useLogin";

export const useMemories = () => {
    const queryClient = useQueryClient();
    const [ , setLocation] = useLocation();
    const { data: user } = useLogin();

    const { mutate: createMemory } = useMutation({
        mutationFn: memories.createMemory,
        onSuccess: (res) => {
            console.log(res);
            //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, invalidar query, etc.)
        }
    })
    
    const { mutate: deleteMemory } = useMutation({
        mutationFn: memories.deleteMemory,
        onSuccess: (res) => {
            console.log(res);
            //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, etc.)
        }
    })

    const { mutate: updateMemory } = useMutation({
        mutationFn: memories.updateMemory,
        onSuccess: (res) => {
            console.log(res);
            //Añadir lo que necesites una vez haya resuelto (redirección a otra página, devolver respuesta, etc.)
        }
    })

    const { data: allMemories } = useQuery({
        queryKey: ["Memories"],
        queryFn: memories.getAllMemories,
        onSuccess: (res) => {
            console.log(res)
            
        }
    })

    const { data: userMemories } = useQuery({
        queryKey: ["User memories", user?.data],
        queryFn: memories.getMemoriesByUser,
        onSuccess: (res) => {
            console.log(res)

        }
    })

    const getMemoryByTitle = (title) => {
        const { data: memory } = useQuery({
            queryKey: ["Memory", title],
            queryFn: memories.getMemoryByTitle,
            onSuccess: (res) => {
                console.log(res)

            }
        })

        return memory;
    }

    const getMemoriesByNotebook = (notebook) => {
        const { data: memories } = useQuery({
            queryKey: ["Notebook memories", notebook],
            queryFn: memories.getMemoriesByNotebook,
            onSuccess: (res) => {
                console.log(res)
    
            }
        })

        return memories;
    }


    const { data: userNotebooks } = useQuery({
        queryKey: ["User notebooks", user.data],
        queryFn: memories.getNotebooksByUser,
        onSuccess: (res) => {
            console.log(res)

        }
    })

    return { createMemory, deleteMemory, updateMemory, allMemories, userMemories, getMemoryByTitle, getMemoriesByNotebook, userNotebooks }
}