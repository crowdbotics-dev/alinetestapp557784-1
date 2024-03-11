import axios from "axios"
const alinetestappAPI = axios.create({
  baseURL: "https://alinetestapp557784-1.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return alinetestappAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return alinetestappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_match_list(payload) {
  return alinetestappAPI.get(`/api/v1/match/`)
}
function api_v1_match_create(payload) {
  return alinetestappAPI.post(`/api/v1/match/`, payload)
}
function api_v1_match_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/match/${payload.id}/`)
}
function api_v1_match_update(payload) {
  return alinetestappAPI.put(`/api/v1/match/${payload.id}/`, payload)
}
function api_v1_match_partial_update(payload) {
  return alinetestappAPI.patch(`/api/v1/match/${payload.id}/`, payload)
}
function api_v1_match_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/match/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return alinetestappAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_subscriptionplan_list(payload) {
  return alinetestappAPI.get(`/api/v1/subscriptionplan/`)
}
function api_v1_subscriptionplan_create(payload) {
  return alinetestappAPI.post(`/api/v1/subscriptionplan/`, payload)
}
function api_v1_subscriptionplan_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/subscriptionplan/${payload.id}/`)
}
function api_v1_subscriptionplan_update(payload) {
  return alinetestappAPI.put(`/api/v1/subscriptionplan/${payload.id}/`, payload)
}
function api_v1_subscriptionplan_partial_update(payload) {
  return alinetestappAPI.patch(
    `/api/v1/subscriptionplan/${payload.id}/`,
    payload
  )
}
function api_v1_subscriptionplan_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/subscriptionplan/${payload.id}/`)
}
function api_v1_swipe_list(payload) {
  return alinetestappAPI.get(`/api/v1/swipe/`)
}
function api_v1_swipe_create(payload) {
  return alinetestappAPI.post(`/api/v1/swipe/`, payload)
}
function api_v1_swipe_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/swipe/${payload.id}/`)
}
function api_v1_swipe_update(payload) {
  return alinetestappAPI.put(`/api/v1/swipe/${payload.id}/`, payload)
}
function api_v1_swipe_partial_update(payload) {
  return alinetestappAPI.patch(`/api/v1/swipe/${payload.id}/`, payload)
}
function api_v1_swipe_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/swipe/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return alinetestappAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return alinetestappAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return alinetestappAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return alinetestappAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_userprofile_list(payload) {
  return alinetestappAPI.get(`/api/v1/userprofile/`)
}
function api_v1_userprofile_create(payload) {
  return alinetestappAPI.post(`/api/v1/userprofile/`, payload)
}
function api_v1_userprofile_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_userprofile_update(payload) {
  return alinetestappAPI.put(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_partial_update(payload) {
  return alinetestappAPI.patch(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_usersubscription_list(payload) {
  return alinetestappAPI.get(`/api/v1/usersubscription/`)
}
function api_v1_usersubscription_create(payload) {
  return alinetestappAPI.post(`/api/v1/usersubscription/`, payload)
}
function api_v1_usersubscription_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/usersubscription/${payload.id}/`)
}
function api_v1_usersubscription_update(payload) {
  return alinetestappAPI.put(`/api/v1/usersubscription/${payload.id}/`, payload)
}
function api_v1_usersubscription_partial_update(payload) {
  return alinetestappAPI.patch(
    `/api/v1/usersubscription/${payload.id}/`,
    payload
  )
}
function api_v1_usersubscription_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/usersubscription/${payload.id}/`)
}
function api_v1_video_list(payload) {
  return alinetestappAPI.get(`/api/v1/video/`)
}
function api_v1_video_create(payload) {
  return alinetestappAPI.post(`/api/v1/video/`, payload)
}
function api_v1_video_retrieve(payload) {
  return alinetestappAPI.get(`/api/v1/video/${payload.id}/`)
}
function api_v1_video_update(payload) {
  return alinetestappAPI.put(`/api/v1/video/${payload.id}/`, payload)
}
function api_v1_video_partial_update(payload) {
  return alinetestappAPI.patch(`/api/v1/video/${payload.id}/`, payload)
}
function api_v1_video_destroy(payload) {
  return alinetestappAPI.delete(`/api/v1/video/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return alinetestappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return alinetestappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return alinetestappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return alinetestappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return alinetestappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return alinetestappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return alinetestappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return alinetestappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return alinetestappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return alinetestappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return alinetestappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_match_list,
  api_v1_match_create,
  api_v1_match_retrieve,
  api_v1_match_update,
  api_v1_match_partial_update,
  api_v1_match_destroy,
  api_v1_signup_create,
  api_v1_subscriptionplan_list,
  api_v1_subscriptionplan_create,
  api_v1_subscriptionplan_retrieve,
  api_v1_subscriptionplan_update,
  api_v1_subscriptionplan_partial_update,
  api_v1_subscriptionplan_destroy,
  api_v1_swipe_list,
  api_v1_swipe_create,
  api_v1_swipe_retrieve,
  api_v1_swipe_update,
  api_v1_swipe_partial_update,
  api_v1_swipe_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_retrieve,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_destroy,
  api_v1_usersubscription_list,
  api_v1_usersubscription_create,
  api_v1_usersubscription_retrieve,
  api_v1_usersubscription_update,
  api_v1_usersubscription_partial_update,
  api_v1_usersubscription_destroy,
  api_v1_video_list,
  api_v1_video_create,
  api_v1_video_retrieve,
  api_v1_video_update,
  api_v1_video_partial_update,
  api_v1_video_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
