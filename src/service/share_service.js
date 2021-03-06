import { apiUrl, fetchWithToken } from "./base_service";

export const getRoleAssignmentsBySiteId = async siteId => {
  const response = await fetchWithToken(apiUrl + "/roleassignment/query/" + siteId);
  return await response.json();
};

export const getRoleAssignmentsByListId = async (siteId, listId, token) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/query/${siteId}/${listId}`, {}, token);
  return await response.json();
};

export const getRoleAssignmentsByListIdAndItemId = async (siteId, listId, itemId) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/query/${siteId}/${listId}/${itemId}`);
  return await response.json();
};

export const getPermissions = async () => {
  const response = await fetchWithToken(apiUrl + "/roleassignment/permissions");
  return await response.json();
};

export const findRoleAssignmentById = async id => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/${id}`);
  return await response.json();
};

export const findRoleAssignmentBySiteIdAndPrincipleId = async (siteId, id) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/site/${siteId}/${id}`);
  return await response.json();
};


export const createRoleAssignmentsBySiteId = async (siteId, roleAssignments) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/create/${siteId}`, {
    method: "post",
    body: JSON.stringify(roleAssignments)
  });
  return await response.json();
};

export const createRoleAssignmentsByListId = async (siteId, listId, roleAssignments) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/create/${siteId}/${listId}`, {
    method: "post",
    body: JSON.stringify(roleAssignments)
  });
  return await response.json();
};

export const createRoleAssignmentsByListIdAndItemId = async (siteId, listId, itemId, roleAssignments) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/create/${siteId}/${listId}/${itemId}`, {
    method: "post",
    body: JSON.stringify(roleAssignments)
  });
  return await response.json();
};

export const updateRoleAssignments = async roleAssignments => {
  const response = await fetchWithToken(apiUrl + "/roleassignment", {
    method: "put",
    body: JSON.stringify(roleAssignments)
  });
  return await response.text();
};

export const deleteRoleAssignments = async (siteId, userIds) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/delete/${siteId}`, {
    method: "post",
    body: JSON.stringify(userIds)
  });
  return await response.text();
};

export const deleteRoleAssignmentsByListId = async (siteId, listId, userIds) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/delete/${siteId}/${listId}`, {
    method: "post",
    body: JSON.stringify(userIds)
  });
  return await response.text();
};

export const deleteRoleAssignmentsByItemId = async (siteId, listId, itemId, userIds) => {
  const response = await fetchWithToken(apiUrl + `/roleassignment/delete/${siteId}/${listId}/${itemId}`, {
    method: "post",
    body: JSON.stringify(userIds)
  });
  return await response.text();
};

export const getPermissionGroups = async _ => {
  const response = await fetchWithToken(apiUrl + `/permissiongroup`);
  return await response.json();
};
