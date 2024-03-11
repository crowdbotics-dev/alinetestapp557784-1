import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_usersubscription_list = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_list",
  async payload => {
    const response = await apiService.api_v1_usersubscription_list(payload)
    return response.data
  }
)
export const api_v1_usersubscription_create = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_create",
  async payload => {
    const response = await apiService.api_v1_usersubscription_create(payload)
    return response.data
  }
)
export const api_v1_usersubscription_retrieve = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_retrieve",
  async payload => {
    const response = await apiService.api_v1_usersubscription_retrieve(payload)
    return response.data
  }
)
export const api_v1_usersubscription_update = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_update",
  async payload => {
    const response = await apiService.api_v1_usersubscription_update(payload)
    return response.data
  }
)
export const api_v1_usersubscription_partial_update = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_partial_update",
  async payload => {
    const response = await apiService.api_v1_usersubscription_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_usersubscription_destroy = createAsyncThunk(
  "userSubscriptions/api_v1_usersubscription_destroy",
  async payload => {
    const response = await apiService.api_v1_usersubscription_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userSubscriptionsSlice = createSlice({
  name: "userSubscriptions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_usersubscription_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersubscription_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersubscription_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersubscription_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersubscription_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_usersubscription_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_usersubscription_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_usersubscription_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usersubscription_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersubscription_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersubscription_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_usersubscription_list,
  api_v1_usersubscription_create,
  api_v1_usersubscription_retrieve,
  api_v1_usersubscription_update,
  api_v1_usersubscription_partial_update,
  api_v1_usersubscription_destroy,
  slice: userSubscriptionsSlice
}
