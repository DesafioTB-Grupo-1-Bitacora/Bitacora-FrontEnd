const PATH = "/memories";


export const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
});

export const createMemory = (client) => async (params) => {
  try {
    const { data } = await client.post(PATH, params, getConfig());
    return data;
  } catch (error) {
    console.log("Create Memory error:", error.message);
    return { success: false };
  }
};

export const deleteMemory = (client) => async (params) => {
  try {
    const { data } = await client.delete(PATH, params, getConfig());
    return data;
  } catch (error) {
    console.log("Delete Memory error:", error.message);
    return { success: false };
  }
};

export const updateMemory = (client) => async (params) => {
  try {
    const { data } = await client.put(PATH, params, getConfig());
    return data;
  } catch (error) {
    console.log("Update Memory error:", error.message);
    return { success: false };
  }
};

export const getAllMemories = (client) => async () => {
  try {
    const { data } = await client.get(PATH, getConfig());
    return data;
  } catch (error) {
    console.log("Get All Memories error:", error.message);
    return { success: false };
  }
};

export const getMemoryByTitle = (client) => async (params) => {
  try {
    const title = params.queryKey[1];
    const { data } = await client.get(`${PATH}/${title}`, getConfig());
    return data;
  } catch (error) {
    console.log("Get Memory By Title error:", error.message);
  }
};

export const getMemoriesByUser = (client) => async () => {
  try {
    const { data } = await client.get(`${PATH}/user`);
    return data;
  } catch (error) {
    console.log("Get Memories By User error:", error.message);
    return { success: false };
  }
};
