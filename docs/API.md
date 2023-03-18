# HET REST API documentation

## Endpoints

- `/categories`
- `/budget`
- `/expenses`
- `/group`
- `/user`

## Endpoint `/categories`

- `GET /categories` | Get all categories | Responses:

  - **200** - Successful operation. Returns array of categories objects.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /categories` | Add a new category | Expects body with object with `name` field | Responses:

  - **201** - Successful operation. New category was added. Returns already added category object.
  - **401** - Auth failed. Returns object with error message.
  - **409** - Conflict. Category with such name already exists. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `PATCH /categories/{id}` | Update one category | Expects parameter with `id` and in body object with `name` field | Responses:

  - **201** - Successful operation. Category was updated. Returns updated category object.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. Category with such id was not found. Returns object with error message.

- `DELETE /categories/{id}` | Delete one category | Expects parameter with `id` | Responses:

  - **204** - Successful operation. Category was deleted.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

> NOTE: `POST` affects the `budget` entries by adding a new field with a new category in it. `PATCH` affects the `budget` and `expenses` entries by changing category name. `DELETE` affects the `budget` entries by removing entry with already deleted category.

## Endpoint `/budget`

- `GET /budget` | Get entire budget | Responses:

  - **200** - Successful operation. Returns array of budget objects.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `PATCH /budget/{id}` | Update the budget amount for the selected category | Expects parameter with `id` and in body object with `amount` field | Responses:

  - **201** - Successful operation. Budget was updated. Returns updated budget object.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. Budget element with such id was not found. Returns object with error message.

## Endpoint `/expenses`

- `GET /expenses` | Get all expenses | Responses:

  - **200** - Successful operation. Returns array of expenses objects.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /expenses` | Add a new expense | Expects body with object with `category`, `amount` and `comment` fields | Responses:

  - **201** - Successful operation. New expense was added. Returns already added expense object.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `PATCH /expenses/{id}` | Update one expense | Expects parameter with `id` and in body object with `category`, `amount` and `comment` fields | Responses:

  - **201** - Successful operation. Expense was updated. Returns updated expense object.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. Expense with such id was not found. Returns object with error message.

- `DELETE /expenses/{id}` | Delete one expense | Expects parameter with `id` | Responses:

  - **204** - Successful operation. Expense was deleted.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

## Endpoint `/group`

- `GET /group` | Get information about group | Responses:

  - **200** - Successful operation. Returns object with information about group.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `PATCH /group` | Update group name | Expects body object with `newName` field | Responses:

  - **200** - Successful operation. Group name was updated.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. Group with such id was not found. Returns object with error message.

- `GET /group/invitations` | Get invitations to groups | Responses:

  - **200** - Successful operation. Returns array of invitations objects.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /group/invite_user` | Send a new invitation | Expects body with object with `email` field | Responses:

  - **201** - Successful operation. New invitation was sent.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.
  - **404** - Not found. User with such email was not found. Returns object with error message.

- `POST /group/decline_user_invitation` | Remove active invitation for specific user | Expects body with object with `email` field | Responses:

  - **204** - Successful operation. Invitation was removed.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /group/remove_user` | Remove the user from the group | Expects body with object with `email` field | Responses:

  - **204** - Successful operation. User was removed from the group.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. User with such email was not found. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /group/accept_invitation` | Accept invitation | Expects body with object with `groupId` field | Responses:

  - **201** - Successful operation. Invitation was accepted.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. Group with such groupId was not found. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /group/decline_invitation` | Decline invitation | Expects body with object with `groupId` field | Responses:

  - **204** - Successful operation. Invitation was declined.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /group/leave_group` | Leave group | Expects body with object with `groupId` field | Responses:

  - **204** - Successful operation. The group was left. User is moved to his origin group.
  - **401** - Auth failed. Returns object with error message.
  - **409** - Conflict. The group owner cannot leave the group. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

## Endpoint `/user`

- `GET /user` | Get user | Responses:

  - **200** - Successful operation. Returns object of user data.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /user/sign_up` | Add a new user | Expects body with object with `name`, `email` and `password` fields | Responses:

  - **201** - Successful operation. New user was added.
  - **409** - Conflict. User already exists. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.

- `POST /user/login` | User login | Expects body object with `email` and `password` fields | Responses:

  - **201** - Successful operation. User was logged in.
  - **401** - Auth failed. Returns object with error message.
  - **404** - Not found. User with such email was not found. Returns object with error message.

- `DELETE /user/{id}` | Delete user | Expects parameter with `id` | Responses:

  - **200** - Successful operation. User was deleted.
  - **401** - Auth failed. Returns object with error message.
  - **422** - Unsuccessful operation. Returns object with error message.
