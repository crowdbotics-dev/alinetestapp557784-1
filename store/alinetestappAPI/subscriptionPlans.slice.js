import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_subscriptionplan_list = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_list",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_list(payload)
    return response.data
  }
)
export const api_v1_subscriptionplan_create = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_create",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_create(payload)
    return response.data
  }
)
export const api_v1_subscriptionplan_retrieve = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_retrieve",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_retrieve(payload)
    return response.data
  }
)
export const api_v1_subscriptionplan_update = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_update",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_update(payload)
    return response.data
  }
)
export const api_v1_subscriptionplan_partial_update = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_partial_update",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_subscriptionplan_destroy = createAsyncThunk(
  "subscriptionPlans/api_v1_subscriptionplan_destroy",
  async payload => {
    const response = await apiService.api_v1_subscriptionplan_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const subscriptionPlansSlice = createSlice({
  name: "subscriptionPlans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_subscriptionplan_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_subscriptionplan_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_subscriptionplan_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_subscriptionplan_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_subscriptionplan_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_subscriptionplan_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_subscriptionplan_partial_update.fulfilled,
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
        api_v1_subscriptionplan_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_subscriptionplan_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_subscriptionplan_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_subscriptionplan_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_subscriptionplan_list,
  api_v1_subscriptionplan_create,
  api_v1_subscriptionplan_retrieve,
  api_v1_subscriptionplan_update,
  api_v1_subscriptionplan_partial_update,
  api_v1_subscriptionplan_destroy,
  slice: subscriptionPlansSlice
}