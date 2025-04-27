import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "chat/fetchProducts",
  async (postId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [] as string[],
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (state.loading = true), (state.error = null);
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (state.loading = false), (state.posts = action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;
